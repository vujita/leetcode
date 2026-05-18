import { describe, expect, test } from 'vitest';
import { encode, decode } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/encode-decode-strings

describe('#271 Encode and Decode Strings', () => {
  test('round-trips ["neet","code","love","you"]', () => {
    const strs = ['neet','code','love','you'];
    expect(decode(encode(strs))).toEqual(strs);
  });
  test('handles empty string in list', () => {
    const strs = ['','foo',''];
    expect(decode(encode(strs))).toEqual(strs);
  });
  test('empty list', () => {
    expect(decode(encode([]))).toEqual([]);
  });
});
