import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { isSubtree } from './solution.js';

// TRACE=1 npx vitest run trees/subtree-of-another-tree

describe('#572 Subtree of Another Tree', () => {
  test('[3,4,5,1,2] contains [4,1,2] → true', () => {
    expect(isSubtree(makeTree([3,4,5,1,2]), makeTree([4,1,2]))).toBe(true);
  });
  test('[3,4,5,1,2,null,null,null,null,0] does not contain [4,1,2] → false', () => {
    expect(isSubtree(makeTree([3,4,5,1,2,null,null,null,null,0]), makeTree([4,1,2]))).toBe(false);
  });
});
