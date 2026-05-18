import { describe, expect, test } from 'vitest';
import { makeList, listToArr } from '../../_utils/types.js';
import { reorderList } from './solution.js';

// TRACE=1 npx vitest run linked-list/reorder-list

describe('#143 Reorder List', () => {
  test('[1,2,3,4] → [1,4,2,3]', () => {
    const h = makeList([1,2,3,4]); reorderList(h);
    expect(listToArr(h)).toEqual([1,4,2,3]);
  });
  test('[1,2,3,4,5] → [1,5,2,4,3]', () => {
    const h = makeList([1,2,3,4,5]); reorderList(h);
    expect(listToArr(h)).toEqual([1,5,2,4,3]);
  });
});
