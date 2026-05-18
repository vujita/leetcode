import { describe, expect, test } from 'vitest';
import { characterReplacement } from './solution.js';

// TRACE=1 npx vitest run sliding-window/longest-repeating-char-replacement

describe('#424 Longest Repeating Character Replacement', () => {
  test('"ABAB" k=2 → 4',    () => expect(characterReplacement('ABAB', 2)).toBe(4));
  test('"AABABBA" k=1 → 4', () => expect(characterReplacement('AABABBA', 1)).toBe(4));
});
