import { describe, expect, test } from 'vitest';
import { coinChange } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/coin-change

describe('#322 Coin Change', () => {
  test('[1,2,5] amount=11 → 3', () => expect(coinChange([1,2,5], 11)).toBe(3));
  test('[2] amount=3 → -1',     () => expect(coinChange([2], 3)).toBe(-1));
  test('[1] amount=0 → 0',      () => expect(coinChange([1], 0)).toBe(0));
});
