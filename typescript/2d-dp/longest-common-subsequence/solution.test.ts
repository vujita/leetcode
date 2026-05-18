import { describe, expect, test } from 'vitest';
import { longestCommonSubsequence } from './solution.js';

// TRACE=1 npx vitest run 2d-dp/longest-common-subsequence

describe('#1143 Longest Common Subsequence', () => {
  test('"abcde","ace" → 3', () => expect(longestCommonSubsequence('abcde', 'ace')).toBe(3));
  test('"abc","abc" → 3',   () => expect(longestCommonSubsequence('abc', 'abc')).toBe(3));
  test('"abc","def" → 0',   () => expect(longestCommonSubsequence('abc', 'def')).toBe(0));
});
