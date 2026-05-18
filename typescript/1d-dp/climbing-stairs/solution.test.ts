import { describe, expect, test } from 'vitest';
import { climbStairs } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/climbing-stairs

describe('#70 Climbing Stairs', () => {
  test('n=2 → 2', () => expect(climbStairs(2)).toBe(2));
  test('n=3 → 3', () => expect(climbStairs(3)).toBe(3));
  test('n=5 → 8', () => expect(climbStairs(5)).toBe(8));
});
