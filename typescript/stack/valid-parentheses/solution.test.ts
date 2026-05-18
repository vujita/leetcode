import { describe, expect, test } from 'vitest';
import { isValid } from './solution.js';

// TRACE=1 npx vitest run stack/valid-parentheses

describe('#20 Valid Parentheses', () => {
  test('"()" → true',     () => expect(isValid('()')).toBe(true));
  test('"()[]{}" → true', () => expect(isValid('()[]{}')).toBe(true));
  test('"(]" → false',    () => expect(isValid('(]')).toBe(false));
  test('"([)]" → false',  () => expect(isValid('([)]')).toBe(false));
  test('"{[]}" → true',   () => expect(isValid('{[]}')).toBe(true));
});
