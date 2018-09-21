import { FeedsTester } from './../test/FeedsTester';
import { newsGroups, feeds } from './NewsFeedManager';

const assert = require('assert');

describe('NewsFeedManager test', function() {

  it('test each newsgroup has all required objec keys', () => {
    for(let key in newsGroups) {
      if (newsGroups.hasOwnProperty(key)) {
        assert( FeedsTester.checkNewsGroupKeys(newsGroups[key]), key + ' has not all keys' );
      }
    }
  });

});
