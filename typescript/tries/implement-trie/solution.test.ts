import { describe, expect, test } from 'vitest';
import { Trie } from './solution.js';

// TRACE=1 npx vitest run tries/implement-trie

describe('#208 Implement Trie', () => {
  test('insert and search', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);
    trie.insert('app');
    expect(trie.search('app')).toBe(true);
  });
});
