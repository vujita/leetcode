import { describe, expect, test } from 'vitest';
import { makeList, listToArr } from '../../_utils/types.js';
import { mergeKLists } from './solution.js';

// TRACE=1 npx vitest run linked-list/merge-k-sorted-lists

describe('#23 Merge K Sorted Lists', () => {
  test('[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]', () => {
    expect(listToArr(mergeKLists([makeList([1,4,5]), makeList([1,3,4]), makeList([2,6])]))).toEqual([1,1,2,3,4,4,5,6]);
  });
  test('[] → []',   () => expect(listToArr(mergeKLists([]))).toEqual([]));
  test('[[]] → []', () => expect(listToArr(mergeKLists([null]))).toEqual([]));
});
