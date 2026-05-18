import { describe, expect, test } from 'vitest';
import { isAnagram } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/valid-anagram

describe('#242 Valid Anagram', () => {
  test('"anagram","nagaram" → true',  () => expect(isAnagram('anagram', 'nagaram')).toBe(true));
  test('"rat","car" → false',         () => expect(isAnagram('rat', 'car')).toBe(false));
});
