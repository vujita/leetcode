import { describe, expect, test } from 'vitest';
import { maxSubArray } from './solution.js';

// TRACE=1 npx vitest run greedy/maximum-subarray

describe('#53 Maximum Subarray', () => {
  test('[-2,1,-3,4,-1,2,1,-5,4] → 6', () => expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6));
  test('[1] → 1',                      () => expect(maxSubArray([1])).toBe(1));
  test('[5,4,-1,7,8] → 23',            () => expect(maxSubArray([5,4,-1,7,8])).toBe(23));
});
