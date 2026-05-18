import { describe, expect, test } from 'vitest';
import { numIslands } from './solution.js';

// TRACE=1 npx vitest run graphs/number-of-islands

describe('#200 Number of Islands', () => {
  test('1 island', () => expect(numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']])).toBe(1));
  test('3 islands', () => expect(numIslands([['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']])).toBe(3));
});
