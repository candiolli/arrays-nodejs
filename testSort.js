var test = require('unit.js');
var sort = require('./sort.js');

//Teste 1
var list = [15,8,6,5,7,3,10,9,2,1,4,11,14,12,16,13];
var listExpected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

var result = sort.bubbleSort(list);

test.assert(result != null);

test.array(result).is(listExpected);

//Teste 2
var list2 = [15,8,6,5,7,3,10,9,2,1,4,11,14,12,16,13];
var listExpected2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 15, 16 ];

var result2 = sort.bubbleSort(list2);

test.assert(result2 != null);

test.array(result2).isNot(listExpected2);