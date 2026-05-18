import { describe, expect, test } from 'vitest';
import { makeTree, TreeNode } from '../../_utils/types.js';
import { lowestCommonAncestor } from './solution.js';

// TRACE=1 npx vitest run trees/lowest-common-ancestor-bst

function findNode(root: TreeNode | null, val: number): TreeNode {
  if (!root) throw new Error(`node ${val} not found`);
  if (root.val === val) return root;
  return findNode(val < root.val ? root.left : root.right, val);
}

describe('#235 Lowest Common Ancestor of BST', () => {
  const tree = makeTree([6,2,8,0,4,7,9,null,null,3,5])!;
  test('p=2,q=8 → 6', () => expect(lowestCommonAncestor(tree, findNode(tree,2), findNode(tree,8)).val).toBe(6));
  test('p=2,q=4 → 2', () => expect(lowestCommonAncestor(tree, findNode(tree,2), findNode(tree,4)).val).toBe(2));
});
