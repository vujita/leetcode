import { describe, expect, test } from 'vitest';
import { rob } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/house-robber-ii

describe('#213 House Robber II', () => {
  test('[2,3,2] → 3',   () => expect(rob([2,3,2])).toBe(3));
  test('[1,2,3,1] → 4', () => expect(rob([1,2,3,1])).toBe(4));
  test('[1,2,3] → 3',   () => expect(rob([1,2,3])).toBe(3));
});
