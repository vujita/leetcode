import { describe, expect, test } from 'vitest';
import { findWords } from './solution.js';

// TRACE=1 npx vitest run tries/word-search-ii

describe('#212 Word Search II', () => {
  test('finds ["eat","oath"]', () => {
    const board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']];
    expect(findWords(board, ['oath','pea','eat','rain']).sort()).toEqual(['eat','oath']);
  });
  test('finds ["a"]', () => {
    expect(findWords([['a','b'],['c','d']], ['a']).sort()).toEqual(['a']);
  });
});
