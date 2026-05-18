import { describe, expect, test } from 'vitest';
import { wordBreak } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/word-break

describe('#139 Word Break', () => {
  test('"leetcode" → true',      () => expect(wordBreak('leetcode', ['leet','code'])).toBe(true));
  test('"applepenapple" → true', () => expect(wordBreak('applepenapple', ['apple','pen'])).toBe(true));
  test('"catsandog" → false',    () => expect(wordBreak('catsandog', ['cats','dog','sand','and','cat'])).toBe(false));
});
