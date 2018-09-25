import React, { Component } from 'react';
import { RssParser } from '../api/RssParser';
import { FeedManager } from '../feeds/FeedsManager';
import { CyberSecurityNewsGroups, CyberSecurityNewsFeeds } from '../feeds/CyberSecurityFeedManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import FeedsFromApi from '../components/FeedsFromApi';
import LoadingSpinner from '../components/LoadingSpinner';
import Breadcrumbs from '../components/Breadcrumbs';

class CyberSecurityGroupDetails extends Component {
  constructor(props) {
    super(props);

    const currentNewsGroup = FeedManager.getNewsGroupByKey(CyberSecurityNewsGroups, props.match.params.group);

    const newsFeedsByGroup = FeedManager.getNewsFeedsByGroup(CyberSecurityNewsFeeds, props.match.params.group);

    const currentFeed = FeedManager.getNewsFeedBySlug(newsFeedsByGroup, props.match.params.slug);

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: newsFeedsByGroup,
      breadcrumbs: this.setupBreadcrumbs(currentNewsGroup, currentFeed),
      newsFromApi: null,
      error: null,
    };

    this.handleUpdateFeed = this.handleUpdateFeed.bind(this);
  }

  setupBreadcrumbs(newsGroup, newsFeed) {
    return [
      { label: 'Cyber Security', href: '/cyber-security', title: 'Back to the Cyber Security news list', active: false },
      { label: newsGroup.title, href: newsGroup.path ? newsGroup.path : '', title: newsGroup.title, active: false },
      { label: newsFeed.label, href: null, title: '', active: true },
    ]
  }

  handleUpdateFeed() {
    // Temporary reset the news list
    this.setState({
      newsFromApi: null,
    });
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
   */
  componentDidUpdate(prevProps) {
    // This is the initial render without a previous prop change
    if (prevProps === undefined) {
      return false;
    }

    // Set new state
    this.setupCurrentNewsGroup();
  }

  setupCurrentNewsGroup() {
    const {slug, group} = this.props.match.params;
    const rssParser = new RssParser();

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {

      const currentFeedsList = FeedManager.getNewsFeedBySlug(this.state.currentFeedsList, slug);
      const currentNewsGroup = FeedManager.getNewsGroupByKey(CyberSecurityNewsGroups, group)

      let self = this;
      rssParser.callPromise(currentFeedsList.url)
        .then(function (response) {
          let newsFromApi = rssParser.parseFeedRss(response.data)
          self.setState({
            group: group,
            slug: slug,
            newsFromApi: newsFromApi,
            currentNewsGroup: currentNewsGroup,
            currentFeed: currentFeedsList,
            breadcrumbs: self.setupBreadcrumbs(currentNewsGroup, currentFeedsList),
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
              <FeedsCategoryList handleUpdateFeed={this.handleUpdateFeed} items={currentFeedsList} />
            </div>
          </div>

        </div>

      );
    }

    return (
      <div className="alert alert-warning">
        <h3>Feed not found</h3>
        <p>The newsgroup were not found; there is not news to display</p>
      </div>
    );
  }
    
}

export default CyberSecurityGroupDetails;
