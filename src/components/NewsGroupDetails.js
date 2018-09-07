import React, { Component } from 'react';
import { callPromise, buildFeedObject } from '../api/RssParser.js';
import { getNewsFeedBySlug, getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import { newsGroups, feeds } from '../feeds/NewsFeedManager.js';
import FeedsCategoryList from './FeedsCategoryList.js';
import FeedsFromApi from './FeedsFromApi.js';
import LoadingSpinner from './LoadingSpinner.js';
import Breadcrumbs from './Breadcrumbs.js';

class NewsGroupDetails extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(newsGroups, props.match.params.group);

    let currentFeed = getNewsFeedBySlug(getNewsFeedsByGroup(feeds, props.match.params.group), props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: getNewsFeedsByGroup(feeds, props.match.params.group),
      breadcrumbs: [
        { label: 'News', href: '/news', title: 'Back to the news main page', active: false },
        { label: currentNewsGroup.title, href: currentNewsGroup.path, title: currentNewsGroup.title, active: false },
        { label: 'Feeds', href: null, title: 'Feeds', active: true },
      ],
      newsFromApi: null,
      error: null,
    };

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

      let currentFeedsList = this.state.currentFeedsList;
      for(let i = 0; i < currentFeedsList.length; i++) {
        for(let j = 0; j < currentFeedsList[i].feeds.length; j++) {
          let lastPathElement = currentFeedsList[i].feeds[j].path.split('/').pop();
          if (lastPathElement === slug) {

            let self = this;
            callPromise(currentFeedsList[i].feeds[j].url)
              .then(function (response) {
                self.setState({
                  group: group,
                  slug: slug,
                  newsFromApi: buildFeedObject(response.data),
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
        }
      }

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