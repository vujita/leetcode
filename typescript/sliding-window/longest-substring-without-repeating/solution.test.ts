import { describe, expect, test } from 'vitest';
import { lengthOfLongestSubstring } from './solution.js';

// TRACE=1 npx vitest run sliding-window/longest-substring-without-repeating

describe('#3 Longest Substring Without Repeating Characters', () => {
  test('"abcabcbb" → 3', () => expect(lengthOfLongestSubstring('abcabcbb')).toBe(3));
  test('"bbbbb" → 1',    () => expect(lengthOfLongestSubstring('bbbbb')).toBe(1));
  test('"pwwkew" → 3',   () => expect(lengthOfLongestSubstring('pwwkew')).toBe(3));
  test('"" → 0',         () => expect(lengthOfLongestSubstring('')).toBe(0));
});
