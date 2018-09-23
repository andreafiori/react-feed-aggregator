import React, { Component } from 'react';
import { VideogamesNewsGroups } from '../feeds/VideoGamesFeedManager';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager';
import NewsList from '../components/NewsList';
import Breadcrumbs from '../components/Breadcrumbs';

class VideoGames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(VideogamesNewsGroups),
      breadcrumbs: [
        { label: 'Videogames', href: null, title: null, active: true }
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

export default VideoGames;
