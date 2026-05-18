import { describe, expect, test } from 'vitest';
import { longestPalindrome } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/longest-palindromic-substring

function isPalin(s: string) { return s === s.split('').reverse().join(''); }

describe('#5 Longest Palindromic Substring', () => {
  test('"babad" → length 3 palindrome', () => {
    const r = longestPalindrome('babad');
    expect(r.length).toBe(3); expect(isPalin(r)).toBe(true);
  });
  test('"cbbd" → "bb"', () => expect(longestPalindrome('cbbd')).toBe('bb'));
  test('"a" → "a"',     () => expect(longestPalindrome('a')).toBe('a'));
});
