import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsList from '../components/NewsList';
import { FeedManager } from '../feeds/FeedsManager';
import { SoftwareDevelopmentNewsGroups } from '../feeds/SoftwareDevelopmentFeedManager';

class SoftwareDevelopment extends Component {

  render() {
    const newsGroups = FeedManager.getAllNewsGroupsAsArray(SoftwareDevelopmentNewsGroups);
    const breadcrumbs = [
      { label: 'Software Development', href: null, title: null, active: true }
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

export default SoftwareDevelopment;
