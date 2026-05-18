import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { isValidBST } from './solution.js';

// TRACE=1 npx vitest run trees/validate-binary-search-tree

describe('#98 Validate Binary Search Tree', () => {
  test('[2,1,3] → true',               () => expect(isValidBST(makeTree([2,1,3]))).toBe(true));
  test('[5,1,4,null,null,3,6] → false', () => expect(isValidBST(makeTree([5,1,4,null,null,3,6]))).toBe(false));
});
