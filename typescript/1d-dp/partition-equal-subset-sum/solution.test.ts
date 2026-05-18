import { describe, expect, test } from 'vitest';
import { canPartition } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/partition-equal-subset-sum

describe('#416 Partition Equal Subset Sum', () => {
  test('[1,5,11,5] → true',  () => expect(canPartition([1,5,11,5])).toBe(true));
  test('[1,2,3,5] → false',  () => expect(canPartition([1,2,3,5])).toBe(false));
});
