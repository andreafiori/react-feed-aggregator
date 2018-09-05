import { BbcNewsGroup, BbcNewsFeeds } from './BbcFeeds.js';
import { CnnNewsGroup, CnnNewsFeeds } from './CnnFeeds.js';
import { NewYorkTimesNewsGroup, NewYorkTimesNewsFeeds } from './NewYorkTimesFeeds.js';
import { WallStreetJournalNewsFeeds, WallStreetJournalNewsGroup } from './WallStreetJournalFeeds.js';

/**
 * Get all News Feeds as object with key => value
 */
export const getAllNewsGroups = function() {
  return {
    bbc: BbcNewsGroup,
    cnn: CnnNewsGroup,
    'new-york-times': NewYorkTimesNewsGroup,
    'wall-street-journal': WallStreetJournalNewsGroup,
  };
}

/**
 * Get All News Groups as array
 */
export const getAllNewsGroupsAsArray = function() {
  return Object.values(getAllNewsGroups());
}

/**
 * Get News Group by key
 */
export const getNewsGroupByKey = function(group) {
  let groups = getAllNewsGroups();
  return (group in groups) ? groups[group] : false;
}

/**
 * Get All News Feeds by group
 */
export const getNewsFeedsByGroup = function(group) {
  let feeds = {
    bbc: BbcNewsFeeds,
    cnn: CnnNewsFeeds,
    'new-york-times': NewYorkTimesNewsFeeds,
    'wall-street-journal': WallStreetJournalNewsFeeds,
  };

  return (group in feeds) ? feeds[group] : false;
}