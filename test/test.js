var assert = require('chai').assert,
    zainTpl = require('../lib/zainTpl.js');
describe('zainTpl', function () {
  it('Test template engine.', function () {
    assert.equal( zainTpl('', {}, false), '', 'test null field');
  });
});
