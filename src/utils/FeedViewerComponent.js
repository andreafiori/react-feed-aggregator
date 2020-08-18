import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RssParser } from '../api/RssParser';
import { FeedManager } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import FeedsFromApi from '../components/FeedsFromApi';
import LoadingSpinner from '../components/LoadingSpinner';
import FeedViewerBreadcrumb from './FeedViewerBreadcrumb';

class FeedViewerComponent extends Component {
  constructor(props) {
    super(props);

    const { newsGroup, newsFeed } = props;
    const { group, slug } = props.match.params;

    const currentNewsGroup = FeedManager.getNewsGroupByKey(newsGroup, group);

    const newsFeedsByGroup = FeedManager.getNewsFeedsByGroup(newsFeed, group);

    const currentFeed = FeedManager.getNewsFeedBySlug(newsFeedsByGroup, slug);

    this.state = {
      group: group,
      slug: slug,
      currentNewsGroup: currentNewsGroup,
      currentFeed: currentFeed,
      currentFeedsList: newsFeedsByGroup,
      newsFromApi: null,
      error: null,
    };

    this.handleUpdateFeed = this.handleUpdateFeed.bind(this);
  }

  handleUpdateFeed() {
    // Temporary reset the news list
    this.setState({
      newsFromApi: null,
      error: null
    });
  }

  componentDidUpdate(prevProps) {
    // Slug change, set new feeds
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const {slug, group} = this.props.match.params;
      this.setupCurrentFeed(slug, group);
    }
  }

  componentDidMount() {
    const {slug, group} = this.props.match.params;

    this.setupCurrentFeed(slug, group);
  }

  setupCurrentFeed(slug, group) {
    const { newsGroup } = this.props;

    const rssParser = new RssParser();
    const currentFeedsList = FeedManager.getNewsFeedBySlug(this.state.currentFeedsList, slug);
    const currentNewsGroup = FeedManager.getNewsGroupByKey(newsGroup, group);

    const self = this;
    rssParser.callPromise(currentFeedsList.url)
      .then(function (response) {
        self.setState({
          group: group,
          slug: slug,
          newsFromApi: rssParser.parseRssXmlString(response.data, currentFeedsList.isAtom),
          currentNewsGroup: currentNewsGroup,
          currentFeed: currentFeedsList,
          error: null,
        });
      })
      .catch(function (error) {
        self.setState({
          group: group,
          slug: slug,
          currentNewsGroup: currentNewsGroup,
          currentFeed: currentFeedsList,
          newsFromApi: null,
          error: error
        });
      });
    
    // Scroll to top
    window.scrollTo(0, 0); // window object is not available on test
  }

  setupCurrentNewsGroup() {
    const {slug, group} = this.props.match.params;

    if ( (slug !== this.state.slug || this.state.newsFromApi === null) && this.state.error === null) {
      this.setupCurrentFeed(slug, group);
    }
  }

  render() {
    const { currentFeed, currentNewsGroup, currentFeedsList, newsFromApi, error } = this.state;
    const { breadcrumbOptions } = this.props;

    if (currentFeed) {
      return (
        <div>
  
          <FeedViewerBreadcrumb newsGroup={currentNewsGroup} newsFeed={currentFeed} options={breadcrumbOptions} />
  
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
  
              {newsFromApi !== null && error === null &&
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

FeedViewerComponent.propTypes = {
  newsGroup: PropTypes.object,
  newsFeed: PropTypes.object,
  breadcrumbOptions: PropTypes.object
}

export default FeedViewerComponent;
