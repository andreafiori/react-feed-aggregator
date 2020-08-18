import React from 'react';
import FeedViewerComponent from '../utils/FeedViewerComponent';
import { JobsNewsGroups, JobsNewsFeeds } from '../feeds/JobsFeedManager';

const SportGroupDetails = (props) => {
  return <FeedViewerComponent
    {...props}
    newsGroup={JobsNewsGroups}
    newsFeed={JobsNewsFeeds}
    breadcrumbOptions={{
      mainSectionLabel: 'Jobs',
      mainSectionHref: '/jobs',
      mainSectionTitle: 'Jobs feedds main page',
    }}
  />
}

export default SportGroupDetails;
