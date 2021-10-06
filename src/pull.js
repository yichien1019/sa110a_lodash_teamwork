import _ from "https://dev.jspm.io/lodash";


console.log("_.pull(['a', 'b', 'c', 'd', 'a', 'b'], ['a', 'c'])=", _.pull(['a', 'b', 'c', 'd', 'a', 'b'], ['a', 'c'])
console.log("_.pull([1, 2, 3, 2, 5, 6, 2], [2, 5])=", _.pull([ 1, 3, 6 ]))

/*

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

*/

