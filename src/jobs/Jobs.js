import React, { Component } from 'react';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager.js';
import NewsList from '../components/NewsList.js';
import Breadcrumbs from '../components/Breadcrumbs.js';
import { JobsNewsGroups } from '../feeds/JobsFeedManager.js';

class Jobs extends Component {
	constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(JobsNewsGroups),
      breadcrumbs: [
        { label: 'Jobs', href: null, title: null, active: true }
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

export default Jobs;