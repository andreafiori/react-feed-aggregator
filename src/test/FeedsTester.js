export class FeedsTester {

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

  static checkNewsFeedKeys(feedsArrayOfObjects) {
    const arrayKeys = ['label', 'title', 'path', 'url'];
    const self = this;
    return feedsArrayOfObjects.every(function(item) {
      return item.feeds.every(function(feed) {
        return self.checkArrayKeysIntoObject(arrayKeys, feed);
      });
    });
  }

  static checkArrayKeysIntoObject(arrayKeys, obj) {
    return arrayKeys.every(function(item) {
      return (obj.hasOwnProperty(item) && obj[item] !== '');
    });
  }

}
