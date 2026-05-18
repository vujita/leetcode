import { describe, expect, test } from 'vitest';
import { makeTree, TreeNode } from '../../_utils/types.js';
import { invertTree } from './solution.js';

// TRACE=1 npx vitest run trees/invert-binary-tree

function treeToArr(root: TreeNode | null): (number | null)[] {
  if (!root) return [];
  const res: (number | null)[] = [], q = [root as TreeNode | null];
  while (q.length) {
    const n = q.shift()!;
    if (!n) { res.push(null); continue; }
    res.push(n.val); q.push(n.left); q.push(n.right);
  }
  while (res[res.length - 1] === null) res.pop();
  return res;
}

describe('#226 Invert Binary Tree', () => {
  test('[4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]', () => {
    expect(treeToArr(invertTree(makeTree([4,2,7,1,3,6,9])))).toEqual([4,7,2,9,6,3,1]);
  });
  test('[2,1,3] → [2,3,1]', () => expect(treeToArr(invertTree(makeTree([2,1,3])))).toEqual([2,3,1]));
  test('[] → []',           () => expect(treeToArr(invertTree(null))).toEqual([]));
});
