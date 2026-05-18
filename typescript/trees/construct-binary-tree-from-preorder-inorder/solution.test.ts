import { describe, expect, test } from 'vitest';
import { TreeNode } from '../../_utils/types.js';
import { buildTree } from './solution.js';

// TRACE=1 npx vitest run trees/construct-binary-tree-from-preorder-inorder

function inorderArr(root: TreeNode | null): number[] {
  if (!root) return [];
  return [...inorderArr(root.left), root.val, ...inorderArr(root.right)];
}

describe('#105 Construct Binary Tree from Preorder and Inorder', () => {
  test('preorder=[3,9,20,15,7] inorder=[9,3,15,20,7]', () => {
    const t = buildTree([3,9,20,15,7], [9,3,15,20,7]);
    expect(inorderArr(t)).toEqual([9,3,15,20,7]);
  });
  test('preorder=[-1] inorder=[-1]', () => {
    expect(buildTree([-1],[-1])?.val).toBe(-1);
  });
});
