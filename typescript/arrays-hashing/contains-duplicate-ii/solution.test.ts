import { describe, expect, test } from 'vitest';
import { containsNearbyDuplicate } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/contains-duplicate-ii

describe('Contains Duplicate II', () => {
  test('example 1', () => {
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true);
  });
  test('example 2', () => {
    expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true);
  });
  test('example 3', () => {
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false);
  });
});
