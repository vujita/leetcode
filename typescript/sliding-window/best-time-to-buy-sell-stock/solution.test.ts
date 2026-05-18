import { describe, expect, test } from 'vitest';
import { maxProfit } from './solution.js';

// TRACE=1 npx vitest run sliding-window/best-time-to-buy-sell-stock

describe('#121 Best Time to Buy and Sell Stock', () => {
  test('[7,1,5,3,6,4] → 5', () => expect(maxProfit([7,1,5,3,6,4])).toBe(5));
  test('[7,6,4,3,1] → 0',   () => expect(maxProfit([7,6,4,3,1])).toBe(0));
});
