import { stripTags, stripCDataTag, truncateString } from './StringUtils';

const assert = require('assert');

describe('String Utils functions', function() {

  it('stripTags will strip HTML tags', () => {
    assert( stripTags('<p>Hello World</p>') === 'Hello World' );
  });

  it('stripCDataTag will remove CDATA tags', () => {
    assert( stripCDataTag('<![CDATA[Hello World]]>') === 'Hello World' );
  });

  it('stripCDataTag will remove CDATA tags', () => {
    assert( truncateString('The pen is on the table', 4) === 'The pen is on' );
  });
});
