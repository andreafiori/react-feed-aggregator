export class FeedsValidator {

  /**
   * Given a NewsGroup object, check all required array keys
   * @param {Object} newsGroup 
   */
  static checkNewsGroupKeys(newsGroup) {
    const requiredNewsgroupKeys = [
      'image',
      'title',
      'description',
      'group',
      'category',
      'country',
      'path'
    ];

    return this.checkArrayKeysIntoObject(requiredNewsgroupKeys, newsGroup);
  }

  /**
   * Check feed object keys
   * @param {Array} feedsArrayOfObjects 
   */
  static checkNewsFeedKeys(feedsArrayOfObjects) {
    const arrayKeys = ['label', 'title', 'path', 'url'];
    const self = this;
    return feedsArrayOfObjects.every(function(item) {
      return item.feeds.every(function(feed) {
        return self.checkArrayKeysIntoObject(arrayKeys, feed);
      });
    });
  }

  /**
   * Given an array, check the values into an object
   * @param {Array} arrayKeys 
   * @param {Object} obj 
   */
  static checkArrayKeysIntoObject(arrayKeys, obj) {
    return arrayKeys.every(function(item) {
      return (obj.hasOwnProperty(item) && obj[item] !== '');
    });
  }

}
