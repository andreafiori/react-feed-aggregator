import React, { Component } from 'react';
import { callPromise, buildFeedObject } from '../api/RssParser.js';
import { getNewsFeedBySlug, getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import { CyberSecurityNewsGroups, CyberSecurityNewsFeeds } from '../feeds/CyberSecurityFeedManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import FeedsFromApi from '../components/FeedsFromApi.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

class CyberSecurityGroupDetails extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(CyberSecurityNewsGroups, props.match.params.group);

    let newsFeedsByGroup = getNewsFeedsByGroup(CyberSecurityNewsFeeds, props.match.params.group);

    let currentFeed = getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: getNewsFeedsByGroup(CyberSecurityNewsFeeds, props.match.params.group),
      breadcrumbs: [
        { label: 'Cyber Security', href: '/cyber-security', title: 'Back to the Cyber Security news list', active: false },
        { label: currentNewsGroup.title, href: currentNewsGroup.path ? currentNewsGroup.path : '', title: currentNewsGroup.title, active: false },
        { label: currentFeed.label, href: null, title: '', active: true },
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

      let currentFeedsList = getNewsFeedBySlug(this.state.currentFeedsList, slug);

      let self = this;
      callPromise(currentFeedsList.url)
        .then(function (response) {
          let newsFromApi = buildFeedObject(response.data)
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: newsFromApi,
            currentNewsGroup: getNewsGroupByKey(CyberSecurityNewsGroups, group),
            currentFeed: currentFeedsList,
            /* currentFeedsList: newsFromApi, */
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

    const { currentFeed, currentNewsGroup, currentFeedsList, newsFromApi, breadcrumbs, error } = this.state;

    if (currentFeed) {
      return (
        <div>

          <Breadcrumbs elements={breadcrumbs} />

          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-9">
  
              {error !== null &&
                <div className="alert alert-danger">
                  <h3>Error occurred</h3>
                  <p>{ error.message }</p>
                  <a href={currentFeed.url} className="btn btn-sm btn-warning" target="_blank" rel="" title="">
                    <i className="fa fa-rss"></i> Rss
                  </a>
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
    } else {
      return (
        <div className="alert alert-warning">
          <h3>Feed not found</h3>
          <p>The newsgroup were not found; there is not news to display</p>
        </div>
      );
    }
    
  }

}

export default CyberSecurityGroupDetails;
