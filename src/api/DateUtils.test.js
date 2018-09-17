import { formatDate } from './DateUtils';

const assert = require('assert');

describe('Date Utils functions', function() {
  it('formatDate will format string date', () => {
    assert( formatDate('2018-09-17') === '17 September 2018' );
  });
});
