import React, { Component } from 'react';
import { RssParser } from '../api/RssParser.js';
import { getNewsFeedBySlug, getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import FeedsFromApi from '../components/FeedsFromApi.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import Breadcrumbs from './../components/Breadcrumbs.js';
import { VideogamesNewsGroups, VideogamesNewsFeeds } from '../feeds/VideoGamesFeedManager.js';

class VideoGamesGroupDetails extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(VideogamesNewsGroups, props.match.params.group);

    let newsFeedsByGroup = getNewsFeedsByGroup(VideogamesNewsFeeds, props.match.params.group);

    let currentFeed = getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: getNewsFeedsByGroup(VideogamesNewsFeeds, props.match.params.group),
      breadcrumbs: this.setupBreadcrumbs(currentNewsGroup),
      newsFromApi: null,
      rssParser: new RssParser(),
      error: null,
    };

  }
  
  setupBreadcrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'News', href: '/news', title: 'Back to the news main page', active: false },
    ];

    if (newsGroup) {
      breadcrumbs.push({
        label: newsGroup.title,
        href: newsGroup.path,
        title: newsGroup.title,
        active: false
      });

      breadcrumbs.push({
        label: 'News list',
        href: '',
        title: '',
        active: true
      });
    } else {
      breadcrumbs.push({label: 'Error', active: true});
    }

    return breadcrumbs;
  }

  /**
   * Load first data on loading page
   */
  componentWillMount() {
    this.setupCurrentNewsGroup();
  }

  /**
   * Check state and update it if needed
   * 
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    // This is the initial render without a previous prop change
    if (prevProps === undefined) {
      return false;
    }

    // Set new state
    this.setupCurrentNewsGroup();
  }

  setupCurrentNewsGroup() {
    const {slug, group} = this.props.match.params;
    const {rssParser} = this.state;

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {

      let currentFeedsLIst = getNewsFeedBySlug(this.state.currentFeedsList, slug);

      let self = this;
      rssParser.callPromise(currentFeedsLIst.url)
        .then(function (response) {
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: rssParser.parseFeedRss(response.data),
            error: null,
          });
        })
        .catch(function (error) {
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: null,
            error: error
          });
        });

    }

    // Scroll to top
    window.scrollTo(0, 0);
  }

  render() {

    const {
      currentFeed,
      currentNewsGroup,
      currentFeedsList,
      newsFromApi,
      breadcrumbs,
      error
    } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
 
            {error !== null &&
              <div className="alert alert-danger">
                <h3>Error occurred</h3>
                <p>{ error.message }</p>
              </div>
            }

            {newsFromApi === null && error === null &&
              <LoadingSpinner />
            }

            {newsFromApi !== null &&
              <FeedsFromApi currentFeed={currentFeed} newsGroup={currentNewsGroup} newsFromApi={newsFromApi} />
            }
          </div>

          <div className="col-sm-12 col-md-4 col-lg-3">
            <FeedsCategoryList items={currentFeedsList} />
          </div>
        </div>

      </div>

    );
  }
}

export default VideoGamesGroupDetails;
