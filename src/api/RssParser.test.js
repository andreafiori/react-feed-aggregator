import { RssParser } from './RssParser';

const assert = require('assert');

describe('RssParser test', function() {

  let parser;

  beforeEach(function() {
    parser = new RssParser();
  });

  it('test parser instanceof RssParser', () => {
    assert(parser instanceof RssParser);
  });

});