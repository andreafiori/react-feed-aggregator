import React, { Component } from 'react';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager';
import NewsList from '../components/NewsList';
import Breadcrumbs from '../components/Breadcrumbs';
import { SportFeedNewsGroup } from '../feeds/SportFeedManager';

class Sport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(SportFeedNewsGroup),
      breadcrumbs: [
        { label: 'Sport', href: null, title: null, active: true }
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

export default Sport;
