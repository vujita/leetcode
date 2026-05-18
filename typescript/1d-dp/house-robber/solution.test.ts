import { describe, expect, test } from 'vitest';
import { rob } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/house-robber

describe('#198 House Robber', () => {
  test('[1,2,3,1] → 4',   () => expect(rob([1,2,3,1])).toBe(4));
  test('[2,7,9,3,1] → 12', () => expect(rob([2,7,9,3,1])).toBe(12));
});
