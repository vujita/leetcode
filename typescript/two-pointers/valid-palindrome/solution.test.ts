import { describe, expect, test } from 'vitest';
import { isPalindrome } from './solution.js';

// TRACE=1 npx vitest run two-pointers/valid-palindrome

describe('#125 Valid Palindrome', () => {
  test('"A man, a plan, a canal: Panama" → true', () => expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true));
  test('"race a car" → false',                    () => expect(isPalindrome('race a car')).toBe(false));
  test('" " → true',                              () => expect(isPalindrome(' ')).toBe(true));
});
