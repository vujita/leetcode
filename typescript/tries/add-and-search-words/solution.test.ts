import { describe, expect, test } from 'vitest';
import { WordDictionary } from './solution.js';

// TRACE=1 npx vitest run tries/add-and-search-words

describe('#211 Add and Search Words', () => {
  test('exact and wildcard search', () => {
    const d = new WordDictionary();
    d.addWord('bad'); d.addWord('dad'); d.addWord('mad');
    expect(d.search('pad')).toBe(false);
    expect(d.search('bad')).toBe(true);
    expect(d.search('.ad')).toBe(true);
    expect(d.search('b..')).toBe(true);
  });
});
