var test = require('unit.js');
var sort = require('./sort.js');

describe('My Describe', function(){
    it('Test bubbleSort', function(){
        var list = [15,8,6,5,7,3,10,9,2,1,4,11,14,12,16,13];

        var result = sort.bubbleSort(list);

        test.assert(result != null);
    });
});