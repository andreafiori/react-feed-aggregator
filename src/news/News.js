import React, { Component } from 'react';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager.js';
import { newsGroups } from '../feeds/NewsFeedManager.js';
import NewsList from '../components/NewsList.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(newsGroups),
      breadcrumbs: [
        { label: 'News', href: null, title: null, active: true }
      ]
    };

  }

  render() {
    const { newsGroups, breadcrumbs } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />
          
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-12">
            <NewsList newsGroups={newsGroups} />
            <h3>TV News Channels</h3>
          </div>

        </div>

      </div>
    );
  }

}

export default News;
