var expect = require('chai').expect;
var oddEven = require('../src/server/modules/oddEven');

describe('oddEven module', function() {

  it('should error nicely when passed a non number', function() {
    expect(oddEven).to.throw(TypeError, /expects a number/);
  });

  it('should return the string even when passed an even nubmer', function() {
    expect(oddEven(4)).to.equal('odd');
  });
});
