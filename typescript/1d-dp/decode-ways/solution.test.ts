import { describe, expect, test } from 'vitest';
import { numDecodings } from './solution.js';

// TRACE=1 npx vitest run 1d-dp/decode-ways

describe('#91 Decode Ways', () => {
  test('"12" → 2',  () => expect(numDecodings('12')).toBe(2));
  test('"226" → 3', () => expect(numDecodings('226')).toBe(3));
  test('"06" → 0',  () => expect(numDecodings('06')).toBe(0));
  test('"0" → 0',   () => expect(numDecodings('0')).toBe(0));
});
