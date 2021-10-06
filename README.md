# sa110a_lodash_teamwork
- 成員:  陳淳 劉怡謙 徐仁鴻
- 內容:  sa110a_lodash_teamwork  

## EXAMPLE

```

import * as _ from 'https://deno.land/x/sa110a_lodash_teamwork/pullAll.ts'

console.log("_.pullAll(['a', 'b', 'c', 'd'], ['a', 'c'])=", _.chunk(['a', 'b', 'c', 'd'], ['a', 'c']))
console.log("_.pullAll([1, 2, 3, 2, 5, 6, 2], [2, 5])=", _.chunk([1, 2, 3, 2, 5, 6, 2], [2, 5]))

```

## RUN

```
deno run ex1.ts
Check file:///D:/LeanaVScode/sa110a_lodash_teamwork/example/ex1.ts
_.pullAll(['a', 'b', 'c', 'd'], ['a', 'c'])= [ "b", "d" ]
_.pullAll([1, 2, 3, 2, 5, 6, 2], [2, 5])= [ 1, 3, 6 ]

```
