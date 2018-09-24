import React, { Component } from 'react';
import { RssParser } from '../api/RssParser';
import { FeedManager } from '../feeds/FeedsManager';
import { newsGroups, feeds } from '../feeds/NewsFeedManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import FeedsFromApi from '../components/FeedsFromApi';
import LoadingSpinner from '../components/LoadingSpinner';
import Breadcrumbs from './../components/Breadcrumbs';
import axios from 'axios';

class NewsGroupDetails extends Component {
  constructor(props) {
    super(props);

    const currentNewsGroup = FeedManager.getNewsGroupByKey(newsGroups, props.match.params.group);

    const newsFeedsByGroup = FeedManager.getNewsFeedsByGroup(feeds, props.match.params.group);

    const currentFeed = FeedManager.getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: FeedManager.getNewsFeedsByGroup(feeds, props.match.params.group),
      breadcrumbs: this.setupBreadCrumbs(currentNewsGroup, currentFeed),
      newsFromApi: null,
      error: null,
      rssParser: new RssParser(),
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
    const {slug, group} = this.props.match.params;
    const {rssParser} = this.state;

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {

      const currentFeedsLIst = FeedManager.getNewsFeedBySlug(this.state.currentFeedsList, slug);

      const self = this;
      rssParser.callPromise(currentFeedsLIst.url)
        .then(function (response) {
          const currentNewsGroup = FeedManager.getNewsGroupByKey(newsGroups, group);
          const feedsByGroup = FeedManager.getNewsFeedsByGroup(feeds, group);
          const currentFeed = FeedManager.getNewsFeedBySlug(feedsByGroup, slug);
          const newBreadcrumbs = self.setupBreadCrumbs(currentNewsGroup, currentFeed);
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: rssParser.parseFeedRss(response.data),
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

export default NewsGroupDetails;
