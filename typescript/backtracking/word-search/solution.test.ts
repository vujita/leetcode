import { describe, expect, test } from 'vitest';
import { exist } from './solution.js';

// TRACE=1 npx vitest run backtracking/word-search

const board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];

describe('#79 Word Search', () => {
  test('"ABCCED" → true',  () => expect(exist(board, 'ABCCED')).toBe(true));
  test('"SEE" → true',     () => expect(exist(board, 'SEE')).toBe(true));
  test('"ABCB" → false',   () => expect(exist(board, 'ABCB')).toBe(false));
});
