//import * as _ from 'https://deno.land/x/sa110a_lodash_teamwork/pullAll.ts'
import * as _ from '../mod.ts'

console.log("_.pullAll(['a', 'b', 'c', 'd'], ['a', 'c'])=", _.pullAll(['a', 'b', 'c', 'd'], ['a', 'c']))
console.log("_.pullAll([1, 2, 3, 2, 5, 6, 2], [2, 5])=", _.pullAll([1, 2, 3, 2, 5, 6, 2], [2, 5]))

