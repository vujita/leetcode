import { describe, expect, test } from 'vitest';
import { maxProduct } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/maximum-product-subarray

describe('#152 Maximum Product Subarray', () => {
  test('[2,3,-2,4] → 6', () => expect(maxProduct([2,3,-2,4])).toBe(6));
  test('[-2,0,-1] → 0',  () => expect(maxProduct([-2,0,-1])).toBe(0));
  test('[-2] → -2',      () => expect(maxProduct([-2])).toBe(-2));
});
