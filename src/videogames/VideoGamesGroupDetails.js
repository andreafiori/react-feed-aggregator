import React from 'react';
import FeedViewerComponent from '../utils/FeedViewerComponent';
import { VideogamesNewsGroups, VideogamesNewsFeeds } from '../feeds/VideoGamesFeedManager';

const VideoGamesGroupDetails = (props) => {
  return <FeedViewerComponent {...props} newsGroup={VideogamesNewsGroups} newsFeed={VideogamesNewsFeeds} />
}

export default VideoGamesGroupDetails;
