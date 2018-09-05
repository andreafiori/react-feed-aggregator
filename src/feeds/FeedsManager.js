/**
 * Get All News Groups as array
 */
export const getAllNewsGroupsAsArray = function(newsGroups) {
  return Object.values(newsGroups);
}

/**
 * Get News Group by key
 */
export const getNewsGroupByKey = function(groups, groupToSearch) {
  return (groupToSearch in groups) ? groups[groupToSearch] : false;
}

/**
 * Get All News Feeds by group
 */
export const getNewsFeedsByGroup = function(feeds, group) {
  return (group in feeds) ? feeds[group] : false;
}