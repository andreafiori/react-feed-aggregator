
import { FeedsTester } from './../test/FeedsTester';
import { DzoneNewsGroup, DzoneNewsFeeds } from './DzoneFeeds';

const assert = require('assert');

describe('Dzone feeds test', function() {

  it('test newsgroup object has all the required keys', () => {
    assert( FeedsTester.checkNewsGroupKeys(DzoneNewsGroup) );
  });

  it('test newsgroup feeds array feeds has all the required keys', () => {
    assert( FeedsTester.checkNewsFeedKeys(DzoneNewsFeeds) );
  });

});
