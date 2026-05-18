import { describe, expect, test } from 'vitest';
import { maxArea } from './solution.js';

// TRACE=1 npx vitest run two-pointers/container-with-most-water

describe('#11 Container With Most Water', () => {
  test('[1,8,6,2,5,4,8,3,7] → 49', () => expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49));
  test('[1,1] → 1',                 () => expect(maxArea([1,1])).toBe(1));
});
