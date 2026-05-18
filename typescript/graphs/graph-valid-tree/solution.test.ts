import { describe, expect, test } from 'vitest';
import { validTree } from './solution.js';

// TRACE=1 npx vitest run graphs/graph-valid-tree

describe('#261 Graph Valid Tree', () => {
  test('n=5 [[0,1],[0,2],[0,3],[1,4]] → true',    () => expect(validTree(5, [[0,1],[0,2],[0,3],[1,4]])).toBe(true));
  test('n=5 [[0,1],[1,2],[2,3],[1,3],[1,4]] → false', () => expect(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])).toBe(false));
});
