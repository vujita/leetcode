import { describe, expect, test } from 'vitest';
import { makeTree } from '../../_utils/types.js';
import { isSameTree } from './solution.js';

// TRACE=1 npx vitest run trees/same-tree

describe('#100 Same Tree', () => {
  test('[1,2,3] == [1,2,3] → true',      () => expect(isSameTree(makeTree([1,2,3]), makeTree([1,2,3]))).toBe(true));
  test('[1,2] != [1,null,2] → false',    () => expect(isSameTree(makeTree([1,2]), makeTree([1,null,2]))).toBe(false));
  test('[1,2,1] != [1,1,2] → false',     () => expect(isSameTree(makeTree([1,2,1]), makeTree([1,1,2]))).toBe(false));
});
