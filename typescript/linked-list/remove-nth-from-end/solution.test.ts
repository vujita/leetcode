import { describe, expect, test } from 'vitest';
import { makeList, listToArr } from '../../_utils/types.js';
import { removeNthFromEnd } from './solution.js';

// TRACE=1 npx vitest run linked-list/remove-nth-from-end

describe('#19 Remove Nth Node From End', () => {
  test('[1,2,3,4,5] n=2 → [1,2,3,5]', () => expect(listToArr(removeNthFromEnd(makeList([1,2,3,4,5]), 2))).toEqual([1,2,3,5]));
  test('[1] n=1 → []',                () => expect(listToArr(removeNthFromEnd(makeList([1]), 1))).toEqual([]));
  test('[1,2] n=1 → [1]',            () => expect(listToArr(removeNthFromEnd(makeList([1,2]), 1))).toEqual([1]));
});
