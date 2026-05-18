import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { maxDepth } from './solution.js';

// TRACE=1 npx vitest run trees/maximum-depth-of-binary-tree

describe('#104 Maximum Depth of Binary Tree', () => {
  test('[3,9,20,null,null,15,7] → 3', () => expect(maxDepth(makeTree([3,9,20,null,null,15,7]))).toBe(3));
  test('[1,null,2] → 2',              () => expect(maxDepth(makeTree([1,null,2]))).toBe(2));
  test('null → 0',                    () => expect(maxDepth(null)).toBe(0));
});
