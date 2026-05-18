import { describe, expect, test } from 'vitest';
import { twoSum } from './solution.js';

// Run with TRACE=1 to see step-by-step visualization:
//   TRACE=1 npx vitest run arrays-hashing/two-sum

describe('#1 Two Sum', () => {
  test('example 1: [2,7,11,15] target=9 → [0,1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('example 2: [3,2,4] target=6 → [1,2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('duplicate values: [3,3] target=6 → [0,1]', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
