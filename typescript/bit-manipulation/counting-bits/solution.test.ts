import { describe, expect, test } from 'vitest';
import { countBits } from './solution.js';

// TRACE=1 npx vitest run bit-manipulation/counting-bits

describe('#338 Counting Bits', () => {
  test('n=2 → [0,1,1]',       () => expect(countBits(2)).toEqual([0,1,1]));
  test('n=5 → [0,1,1,2,1,2]', () => expect(countBits(5)).toEqual([0,1,1,2,1,2]));
});
