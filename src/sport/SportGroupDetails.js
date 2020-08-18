import React from 'react';
import FeedViewerComponent from '../utils/FeedViewerComponent';
import { SportFeedNewsGroup, SportFeedNewsFeeds } from '../feeds/SportFeedManager';

const SportGroupDetails = (props) => {
  return <FeedViewerComponent
    {...props}
    newsGroup={SportFeedNewsGroup}
    newsFeed={SportFeedNewsFeeds}
    breadcrumbOptions={{
      mainSectionLabel: 'Sport',
      mainSectionHref: '/sport',
      mainSectionTitle: 'Sport main page',
    }}
  />
}

export default SportGroupDetails;
