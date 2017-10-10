var makeTitle = require('../src/server/modules/capitalize');
var expect = require('chai').expect;

describe('test for capitalize function', function () {
    it('should take a word and capitalize each first letter of its words',
        function () {
            expect(makeTitle('truck')).to.equal('Truck');
        });
    it('should take a string and capitalize each first letter of its words',
    function () {
        expect(makeTitle('trucks love to eat salad and play')).to.equal('Trucks Love To Eat Salad And Play');
    });
    
});