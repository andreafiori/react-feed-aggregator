import React, { Component } from 'react';
import { callPromise, buildFeedObject } from '../api/RssParser.js';
import { getNewsFeedBySlug, getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import { newsGroups, feeds } from '../feeds/NewsFeedManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import FeedsFromApi from '../components/FeedsFromApi.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import Breadcrumbs from './../components/Breadcrumbs.js';

class NewsGroupDetails extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(newsGroups, props.match.params.group);

    let newsFeedsByGroup = getNewsFeedsByGroup(feeds, props.match.params.group);

    let currentFeed = getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: getNewsFeedsByGroup(feeds, props.match.params.group),
      breadcrumbs: this.setupBreadCrumbs(currentNewsGroup, currentFeed),
      newsFromApi: null,
      error: null,
    };

  }

  setupBreadCrumbs(newsGroup, feed) {
    return [
      { label: 'News', href: '/news', title: 'Back to the news main page', active: false },
      { label: newsGroup.title, href: newsGroup.path ? newsGroup.path : '', title: newsGroup.title, active: false },
      // { label: feed.label, href: null, title: '', active: true },
      { label: 'News list', href: null, title: '', active: true },
    ];
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
    let slug = this.props.match.params.slug;
    let group = this.props.match.params.group;

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {

      let currentFeedsLIst = getNewsFeedBySlug(this.state.currentFeedsList, slug);

      let self = this;
      callPromise(currentFeedsLIst.url)
        .then(function (response) {
          const currentNewsGroup = getNewsGroupByKey(newsGroups, group);
          const feedsByGroup = getNewsFeedsByGroup(feeds, group);
          const currentFeed = getNewsFeedBySlug(feedsByGroup, slug);
          const newBreadcrumbs = self.setupBreadCrumbs(currentNewsGroup, currentFeed);
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: buildFeedObject(response.data),
            error: null,
            breadcrumbs: newBreadcrumbs
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

    const { currentFeed, currentNewsGroup, currentFeedsList, newsFromApi, breadcrumbs, error } = this.state;

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

export default NewsGroupDetails;
