import { describe, expect, test } from 'vitest';
import { reverseBits } from './solution.js';

// TRACE=1 npx vitest run bit-manipulation/reverse-bits

describe('#190 Reverse Bits', () => {
  test('0b00000010100101000001111010011100 → 964176192', () => {
    expect(reverseBits(0b00000010100101000001111010011100)).toBe(964176192);
  });
  test('0b11111111111111111111111111111101 → 3221225471', () => {
    expect(reverseBits(0b11111111111111111111111111111101 >>> 0)).toBe(3221225471);
  });
});
