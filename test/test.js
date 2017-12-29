var assert = require('chai').assert,
    zainTpl = require('../lib/zainTpl.js');
describe('zainTpl', function () {
  it('Test template engine.', function () {
    assert.equal( zainTpl(), '', 'test null field');
    assert.equal( zainTpl(''), '', 'test null2 field');
    assert.equal( zainTpl('', {}), '', 'test null field');
    assert.equal( zainTpl('{{data}}', {}), '{{data}}', 'test no data field');
    assert.equal( zainTpl('{{data}}', {data:'<span>21</span>'}, false), '<span>21</span>', 'test no safe mode field');
    assert.equal( zainTpl('{{data}}', {data:'<span>21</span>'}, true), '&lt;span&gt;21&lt;/span&gt;', 'test safe mode field');
    assert.equal( zainTpl('{{ data }}', {data:'21'}), '21', 'test string space field');
    assert.equal( zainTpl('{{ data.info }}', {data:{info: '21'}}), '21', 'test object.object field');
  });
});
