import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsList from '../components/NewsList';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager';
import { SoftwareDevelopmentNewsGroups } from '../feeds/SoftwareDevelopmentFeedManager';

class SoftwareDevelopment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(SoftwareDevelopmentNewsGroups),
      breadcrumbs: [
        { label: 'Software Development', href: null, title: null, active: true }
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
          </div>

        </div>

      </div>
    );
  }
}

export default SoftwareDevelopment;
