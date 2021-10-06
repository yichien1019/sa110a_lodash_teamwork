import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../pullAll.ts";

Deno.test("pullAll", () => {
    assertEquals(_.pullAll(['a', 'b', 'c', 'd', 'a', 'b'], ['a', 'c']), ['b', 'd'])
    assertEquals(_.pullAll([1, 2, 3, 2, 5, 6, 2], [2, 5]), [ 1, 3, 6 ])
  })