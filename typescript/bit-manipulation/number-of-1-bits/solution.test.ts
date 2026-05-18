import { describe, expect, test } from 'vitest';
import { hammingWeight } from './solution.js';

// TRACE=1 npx vitest run bit-manipulation/number-of-1-bits

describe('#191 Number of 1 Bits', () => {
  test('11 (0b1011) → 3',  () => expect(hammingWeight(11)).toBe(3));
  test('128 (0b10000000) → 1', () => expect(hammingWeight(128)).toBe(1));
  test('2147483645 → 30', () => expect(hammingWeight(2147483645)).toBe(30));
});
