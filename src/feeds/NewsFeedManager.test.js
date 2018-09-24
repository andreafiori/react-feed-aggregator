import { FeedsValidator } from './../feeds/FeedsValidator';
import { newsGroups, feeds } from './NewsFeedManager';

const assert = require('assert');

describe('NewsFeedManager test', function() {

  it('test each newsgroup has all required object keys', () => {
    for(let key in newsGroups) {
      if (newsGroups.hasOwnProperty(key)) {
        assert(FeedsValidator.checkNewsGroupKeys(newsGroups[key]), key + ' has not all keys');
      }
    }
  });

  /* it('test each newsfeed has all required object keys', () => {
    const arrayKeys = ['label', 'title', 'path', 'url'];
    for(let key in feeds) {
      if (key !== 'feeds') {
        continue;
      }

      for(let i = 0; i < feeds['feeds']; i++) {
        assert(FeedsValidator.checkArrayKeysIntoObject(arrayKeys, feeds['feeds'][i]));
      }
    }
  }); */

});
