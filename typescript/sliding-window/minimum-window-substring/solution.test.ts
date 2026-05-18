import { describe, expect, test } from 'vitest';
import { minWindow } from './solution.js';

// TRACE=1 npx vitest run sliding-window/minimum-window-substring

describe('#76 Minimum Window Substring', () => {
  test('"ADOBECODEBANC","ABC" → "BANC"', () => expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC'));
  test('"a","a" → "a"',                 () => expect(minWindow('a', 'a')).toBe('a'));
  test('"a","aa" → ""',                 () => expect(minWindow('a', 'aa')).toBe(''));
});
