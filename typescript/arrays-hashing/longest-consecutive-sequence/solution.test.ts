import { describe, expect, test } from 'vitest';
import { longestConsecutive } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/longest-consecutive-sequence

describe('#128 Longest Consecutive Sequence', () => {
  test('[100,4,200,1,3,2] → 4', () => expect(longestConsecutive([100,4,200,1,3,2])).toBe(4));
  test('[0,3,7,2,5,8,4,6,0,1] → 9', () => expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toBe(9));
  test('[] → 0', () => expect(longestConsecutive([])).toBe(0));
});
