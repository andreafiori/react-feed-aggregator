import { FeedsTester } from './../test/FeedsTester';
import { SoftwareDevelopmentNewsGroups, SoftwareDevelopmentNewsFeeds } from './SoftwareDevelopmentFeedManager';

const assert = require('assert');

describe('NewsFeedManager test', function() {

  it('test each newsgroup has all required objec keys', () => {
    for(let key in SoftwareDevelopmentNewsGroups) {
      if (SoftwareDevelopmentNewsGroups.hasOwnProperty(key)) {
        assert( FeedsTester.checkNewsGroupKeys(SoftwareDevelopmentNewsGroups[key]), key + ' has not all keys' );
      }
    }
  });

});
