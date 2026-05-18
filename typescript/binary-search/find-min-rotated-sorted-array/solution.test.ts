import { describe, expect, test } from 'vitest';
import { findMin } from './solution.js';

// TRACE=1 npx vitest run binary-search/find-min-rotated-sorted-array

describe('#153 Find Minimum in Rotated Sorted Array', () => {
  test('[3,4,5,1,2] → 1',    () => expect(findMin([3,4,5,1,2])).toBe(1));
  test('[4,5,6,7,0,1,2] → 0', () => expect(findMin([4,5,6,7,0,1,2])).toBe(0));
  test('[11,13,15,17] → 11',  () => expect(findMin([11,13,15,17])).toBe(11));
});
