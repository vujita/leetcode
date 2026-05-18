import { describe, expect, test } from 'vitest';
import { containsDuplicate } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/contains-duplicate

describe('#217 Contains Duplicate', () => {
  test('[1,2,3,1] → true',  () => expect(containsDuplicate([1,2,3,1])).toBe(true));
  test('[1,2,3,4] → false', () => expect(containsDuplicate([1,2,3,4])).toBe(false));
  test('[1,1,1,3,3,4,3,2,4,2] → true', () => expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true));
});
