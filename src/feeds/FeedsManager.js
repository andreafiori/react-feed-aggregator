/**
 * Get All News Groups as array
 */
export const getAllNewsGroupsAsArray = function(newsGroups) {
  // return Object.values(newsGroups); Not working on IE :(
  return Object.keys(newsGroups).map(function(e) {
    return newsGroups[e];
  });
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
export const getNewsFeedBySlug = function(currentFeedsList, slug) {
  for(let i = 0; i < currentFeedsList.length; i++) {
    for(let j = 0; j < currentFeedsList[i].feeds.length; j++) {
      if (typeof currentFeedsList[i].feeds[j].path === 'undefined') {
        continue;
      }
      let lastPathElement = currentFeedsList[i].feeds[j].path.split('/').pop();
      if (lastPathElement === slug) {
        return currentFeedsList[i].feeds[j];
      }
    }
  }
  return false;
}
