import { FeedsValidator } from './../feeds/FeedsValidator';
import { newsGroups, feeds } from './NewsFeedManager';

const assert = require('assert');

describe('NewsFeedManager test', function() {

  it('test each newsgroup has all required objec keys', () => {
    for(let key in newsGroups) {
      if (newsGroups.hasOwnProperty(key)) {
        assert( FeedsValidator.checkNewsGroupKeys(newsGroups[key]), key + ' has not all keys' );
      }
    }
  });

});
