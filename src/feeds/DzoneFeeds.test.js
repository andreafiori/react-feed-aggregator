
import { FeedsValidator } from './../feeds/FeedsValidator';
import { DzoneNewsGroup, DzoneNewsFeeds } from './DzoneFeeds';

const assert = require('assert');

describe('Dzone feeds test', function() {

  it('test newsgroup object has all the required keys', () => {
    assert( FeedsValidator.checkNewsGroupKeys(DzoneNewsGroup) );
  });

  it('test newsgroup feeds array feeds has all the required keys', () => {
    assert( FeedsValidator.checkNewsFeedKeys(DzoneNewsFeeds) );
  });

});
