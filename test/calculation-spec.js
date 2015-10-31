var chai = require('chai');
var expect = chai.expect;
var app = require('../calculation');

describe('calculation', function() {
  describe('Q', function() {
    it('q exist', function () {
      expect(app.qValue(5)).to.equal(5);
    });
    it('q undefined', function () {
      expect(app.qValue()).to.equal(3);
    });
  });
  describe('ADD', function() {
    it('add p,q exist', function () {
      expect(app.add(5,20)).to.equal(25);
    });

    it('add p exits and q NOT exist', function () {
      expect(app.add(5)).to.equal(8);
    });

    it('add p,q NOT exist', function () {
      expect(app.add()).to.equal(3);
    });
  });
  
  describe('OBJECT', function() {
    it('obj exist', function () {
      var out = {a:'blore', b:'mdu'};
      expect(app.simpleObject()).to.deep.equal(out);
    });
  });
});