export class FeedsValidator {

  /**
   * Given a NewsGroup object, check all required array keys
   * @param {Object} newsGroup 
   */
  static checkNewsGroupKeys(newsGroup) {
    const keysToCheck = [
      'image',
      'title',
      'description',
      'group',
      'category',
      'country',
      'path'
    ];

    return this.checkArrayKeysIntoObject(newsGroup, keysToCheck);
  }

  /**
   * Check feed object keys
   * @param {Array} feedsArrayOfObjects 
   */
  static checkNewsFeedKeys(feedsArrayOfObjects) {
    const keysToCheck = ['label', 'title', 'path', 'url'];
    const self = this;
    return feedsArrayOfObjects.every(function(item) {
      return item.feeds.every(function(feed) {
        return self.checkArrayKeysIntoObject(feed, keysToCheck);
      });
    });
  }

  /**
   * Given an array, check the values into an object
   * @param {Object} obj 
   * @param {Array} keysToCheck 
   */
  static checkArrayKeysIntoObject(obj, keysToCheck) {
    return keysToCheck.every(function(item) {
      return (obj.hasOwnProperty(item) && obj[item] !== '');
    });
  }

}
