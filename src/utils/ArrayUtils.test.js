import { ArrayUtils } from './ArrayUtils';

const assert = require('assert');

describe('ArrayUtils test', function() {

  let sampleArrayOne;

  let sampleArrayTwo;

  beforeEach(function() {
    sampleArrayOne = [
      {place:"here",name: "stuff"},
      {place:"there",name: "morestuff1"},
      {place:"there",name: "morestuff2"},
    ];

    sampleArrayTwo = [
      {place:"here",name: "stuff"},
      {place:"there",name: "morestuff1"}
    ];

  });

  it('test arrays are the same', () => {
    // Remove last array element
    sampleArrayOne.splice(-1, 1);

    assert( ArrayUtils.areArraysEqual(sampleArrayOne, sampleArrayTwo) );
  });

  it('test arrays are NOT the same', () => {
    assert( !ArrayUtils.areArraysEqual(sampleArrayOne, sampleArrayTwo) );
  });

});