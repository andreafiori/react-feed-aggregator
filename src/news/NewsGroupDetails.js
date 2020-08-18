import React from 'react';
import FeedViewerComponent from '../utils/FeedViewerComponent';
import { newsGroups, feeds } from '../feeds/NewsFeedManager';

const NewsGroupDetails = (props) => {
  return <FeedViewerComponent {...props} newsGroup={newsGroups} newsFeed={feeds} />
}

export default NewsGroupDetails;
