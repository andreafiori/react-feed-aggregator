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

/**
 * Get Feed property block from the object list (local)
 * @param {*} feedsList 
 */
export const getNewsFeedBySlug = function(feedsList, slug) {
  for(let i = 0; i < feedsList.length; i++) {
    for(let j = 0; j < feedsList[i].feeds.length; j++) {
      let lastPathElement = feedsList[i].feeds[j].path.split('/').pop();
      if (lastPathElement === slug) {
        return feedsList[i].feeds[j];
      }
    }
  }
  return false;
}