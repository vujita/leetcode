import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { maxPathSum } from './solution.js';

// TRACE=1 npx vitest run trees/binary-tree-maximum-path-sum

describe('#124 Binary Tree Maximum Path Sum', () => {
  test('[1,2,3] → 6',                          () => expect(maxPathSum(makeTree([1,2,3]))).toBe(6));
  test('[-10,9,20,null,null,15,7] → 42',       () => expect(maxPathSum(makeTree([-10,9,20,null,null,15,7]))).toBe(42));
  test('[-3] → -3',                            () => expect(maxPathSum(makeTree([-3]))).toBe(-3));
});
