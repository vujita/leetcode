import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { levelOrder } from './solution.js';

// TRACE=1 npx vitest run trees/binary-tree-level-order-traversal

describe('#102 Binary Tree Level Order Traversal', () => {
  test('[3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]', () => expect(levelOrder(makeTree([3,9,20,null,null,15,7]))).toEqual([[3],[9,20],[15,7]]));
  test('[1] → [[1]]',                                   () => expect(levelOrder(makeTree([1]))).toEqual([[1]]));
  test('null → []',                                     () => expect(levelOrder(null)).toEqual([]));
});
