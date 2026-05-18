import { describe, expect, test } from 'vitest';
import { lengthOfLIS } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/longest-increasing-subsequence

describe('#300 Longest Increasing Subsequence', () => {
  test('[10,9,2,5,3,7,101,18] → 4', () => expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4));
  test('[0,1,0,3,2,3] → 4',         () => expect(lengthOfLIS([0,1,0,3,2,3])).toBe(4));
  test('[7,7,7,7,7,7,7] → 1',       () => expect(lengthOfLIS([7,7,7,7,7,7,7])).toBe(1));
});
