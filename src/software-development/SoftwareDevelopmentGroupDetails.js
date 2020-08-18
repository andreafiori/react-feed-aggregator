import React from 'react';
import FeedViewerComponent from '../utils/FeedViewerComponent';
import { SoftwareDevelopmentNewsGroups, SoftwareDevelopmentNewsFeeds } from '../feeds/SoftwareDevelopmentFeedManager';

const SoftwareDevelopmentGroupDetails = (props) => {
  return <FeedViewerComponent
    {...props}
    newsGroup={SoftwareDevelopmentNewsGroups}
    newsFeed={SoftwareDevelopmentNewsFeeds}
    breadcrumbOptions={{
      mainSectionLabel: 'Software development',
      mainSectionHref: '/software-development',
      mainSectionTitle: 'Software development feed index page',
    }}
  />
}

export default SoftwareDevelopmentGroupDetails;
