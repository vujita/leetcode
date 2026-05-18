import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { kthSmallest } from './solution.js';

// TRACE=1 npx vitest run trees/kth-smallest-element-in-bst

describe('#230 Kth Smallest Element in BST', () => {
  test('[3,1,4,null,2] k=1 → 1',           () => expect(kthSmallest(makeTree([3,1,4,null,2]), 1)).toBe(1));
  test('[5,3,6,2,4,null,null,1] k=3 → 3',  () => expect(kthSmallest(makeTree([5,3,6,2,4,null,null,1]), 3)).toBe(3));
});
