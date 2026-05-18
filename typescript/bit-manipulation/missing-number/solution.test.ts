import { describe, expect, test } from 'vitest';
import { missingNumber } from './solution.js';

// TRACE=1 npx vitest run bit-manipulation/missing-number

describe('#268 Missing Number', () => {
  test('[3,0,1] → 2',                   () => expect(missingNumber([3,0,1])).toBe(2));
  test('[0,1] → 2',                     () => expect(missingNumber([0,1])).toBe(2));
  test('[9,6,4,2,3,5,7,0,1] → 8',      () => expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8));
});
