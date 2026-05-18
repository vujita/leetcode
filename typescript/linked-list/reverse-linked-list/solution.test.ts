import { describe, expect, test } from 'vitest';
import { makeList, listToArr } from '../../_utils/types.js';
import { reverseList } from './solution.js';

// TRACE=1 npx vitest run linked-list/reverse-linked-list

describe('#206 Reverse Linked List', () => {
  test('[1,2,3,4,5] → [5,4,3,2,1]', () => expect(listToArr(reverseList(makeList([1,2,3,4,5])))).toEqual([5,4,3,2,1]));
  test('[1,2] → [2,1]',             () => expect(listToArr(reverseList(makeList([1,2])))).toEqual([2,1]));
  test('[] → []',                   () => expect(listToArr(reverseList(null))).toEqual([]));
});
