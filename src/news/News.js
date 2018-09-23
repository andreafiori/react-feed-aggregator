import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import { newsGroups } from '../feeds/NewsFeedManager';
import NewsList from '../components/NewsList';
import Breadcrumbs from '../components/Breadcrumbs';

class News extends Component {

  render() {
    const newsGroupsList = FeedManager.getAllNewsGroupsAsArray(newsGroups);
    const breadcrumbs = [
      { label: 'News', href: null, title: null, active: true }
    ];

    return (
      <div>
        <Breadcrumbs elements={breadcrumbs} />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <NewsList newsGroups={newsGroupsList} />
          </div>
        </div>
      </div>
    );
  }

}

export default News;
