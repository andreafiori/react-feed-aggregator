import React from 'react';
import FeedViewerComponent from '../utils/FeedViewerComponent';
import { CyberSecurityNewsGroups, CyberSecurityNewsFeeds } from '../feeds/CyberSecurityFeedManager';

const CyberSecurityGroupDetails = (props) => {
  return <FeedViewerComponent
    {...props}
    newsGroup={CyberSecurityNewsGroups}
    newsFeed={CyberSecurityNewsFeeds}
    breadcrumbOptions={{
      mainSectionLabel: 'Cyber Security',
      mainSectionHref: '/cyber-security',
      mainSectionTitle: 'Cyber Security feed index page',
    }}
  />
}

export default CyberSecurityGroupDetails;
