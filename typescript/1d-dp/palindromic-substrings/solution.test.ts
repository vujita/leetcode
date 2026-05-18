import { describe, expect, test } from 'vitest';
import { countSubstrings } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/palindromic-substrings

describe('#647 Palindromic Substrings', () => {
  test('"abc" → 3', () => expect(countSubstrings('abc')).toBe(3));
  test('"aaa" → 6', () => expect(countSubstrings('aaa')).toBe(6));
});
