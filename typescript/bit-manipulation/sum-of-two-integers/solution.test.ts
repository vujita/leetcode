import { describe, expect, test } from 'vitest';
import { getSum } from './solution.js';

// TRACE=1 npx vitest run bit-manipulation/sum-of-two-integers

describe('#371 Sum of Two Integers', () => {
  test('1+2 → 3',   () => expect(getSum(1, 2)).toBe(3));
  test('2+3 → 5',   () => expect(getSum(2, 3)).toBe(5));
  test('-1+1 → 0',  () => expect(getSum(-1, 1)).toBe(0));
  test('-3+-2 → -5',() => expect(getSum(-3, -2)).toBe(-5));
});
