import { describe, expect, test } from 'vitest';
import { makeList, listToArr } from '../../_utils/types.js';
import { mergeTwoLists } from './solution.js';

// TRACE=1 npx vitest run linked-list/merge-two-sorted-lists

describe('#21 Merge Two Sorted Lists', () => {
  test('[1,2,4]+[1,3,4] → [1,1,2,3,4,4]', () => expect(listToArr(mergeTwoLists(makeList([1,2,4]), makeList([1,3,4])))).toEqual([1,1,2,3,4,4]));
  test('[]+[] → []',                       () => expect(listToArr(mergeTwoLists(null, null))).toEqual([]));
  test('[]+[0] → [0]',                     () => expect(listToArr(mergeTwoLists(null, makeList([0])))).toEqual([0]));
});
