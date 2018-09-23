import React, { Component } from 'react';
import { VideogamesNewsGroups } from '../feeds/VideoGamesFeedManager';
import { FeedManager } from '../feeds/FeedsManager';
import NewsList from '../components/NewsList';
import Breadcrumbs from '../components/Breadcrumbs';

class VideoGames extends Component {
  render() {
    const newsGroups = FeedManager.getAllNewsGroupsAsArray(VideogamesNewsGroups);
    const breadcrumbs = [
      { label: 'Videogames', href: null, title: null, active: true }
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

export default VideoGames;
