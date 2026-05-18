import { describe, expect, test } from 'vitest';
import { productExceptSelf } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/product-except-self

describe('#238 Product of Array Except Self', () => {
  test('[1,2,3,4] → [24,12,8,6]',          () => expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]));
  test('[-1,1,0,-3,3] → [0,0,9,0,0]',      () => expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]));
});
