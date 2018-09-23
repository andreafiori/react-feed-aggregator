import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import NewsList from '../components/NewsList';
import Breadcrumbs from '../components/Breadcrumbs';
import { JobsNewsGroups } from '../feeds/JobsFeedManager';

class Jobs extends Component {

  render() {
    const newsGroups = FeedManager.getAllNewsGroupsAsArray(JobsNewsGroups);
    const breadcrumbs = [
      { label: 'Jobs', href: null, title: null, active: true }
    ];

    return (
      <div>
        <Breadcrumbs elements={breadcrumbs} />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <NewsList newsGroups={newsGroups} />
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;