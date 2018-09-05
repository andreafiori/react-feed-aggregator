import React, { Component } from 'react';
import { rss2Json } from '../api/RssParser.js';
import { getNewsFeedsByGroup, getNewsGroupByKey } from '../feeds/NewsFeedManager.js';
import FeedsCategoryList from './FeedsCategoryList.js';
import FeedsFromApi from './FeedsFromApi.js';
import LoadingSpinner from './LoadingSpinner.js';
import Breadcrumbs from './Breadcrumbs.js';

class NewsGroupDetails extends Component {

  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(props.match.params.group)

    this.state = {
      group: props.match.params.group,
      slug: props.match.params.slug,
      currentNewsGroup: currentNewsGroup,
      currentFeedsList: getNewsFeedsByGroup(props.match.params.group),
      breadcrumbs: [
        { label: 'News', href: '/news', title: 'Back to the news main page', active: false },
        { label: currentNewsGroup.title, href: currentNewsGroup.path, title: currentNewsGroup.title, active: false },
        { label: 'Feeds', href: null, title: 'Feeds', active: true },
      ],
      newsFromApi: null,
      error: null,
    };
  }

  componentWillMount() {
    /* Get feed by slug this.props.match.params.slug */
    this.setupCurrentNewsGroup();
  }

  componentDidUpdate(prevProps, prevState) {
    // this is the initial render without a previous prop change
    if (prevProps === undefined) {
      return false;
    }

    // set new state
    this.setupCurrentNewsGroup();
  }

  setupCurrentNewsGroup() {
    let slug = this.props.match.params.slug;
    let group = this.props.match.params.group;
    if (slug !== this.state.slug || this.state.newsFromApi === null) {

      let currentFeedsList = this.state.currentFeedsList;
      for(let i = 0; i < currentFeedsList.length; i++) {
        for(let j = 0; j < currentFeedsList[i].feeds.length; j++) {
          let lastPathElement = currentFeedsList[i].feeds[j].path.split('/').pop();
          if (lastPathElement === slug) {

            let self = this;
            rss2Json(currentFeedsList[i].feeds[j].url)
              .then(function (response) {
                self.setState({
                  group: group,
                  slug: slug,
                  newsFromApi: response.data,
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

    const { currentNewsGroup, currentFeedsList, newsFromApi, breadcrumbs, error } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
 
            {error !== null &&
              <div className="alert alert-danger">
                <h3>Error occurred</h3>
                <p>{ JSON.stringify(error) }</p>
              </div>
            }

            {newsFromApi === null && error === null &&
              <div>
                <LoadingSpinner />
              </div>
            }

            {newsFromApi !== null &&
              <div>
                <FeedsFromApi newsGroup={currentNewsGroup} newsFromApi={newsFromApi} />
              </div>
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