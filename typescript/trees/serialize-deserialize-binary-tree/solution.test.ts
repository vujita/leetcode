import { describe, expect, test } from 'vitest';
import { makeTree, TreeNode } from '../../_utils/types.js';
import { serialize, deserialize } from './solution.js';

// TRACE=1 npx vitest run trees/serialize-deserialize-binary-tree

function inorder(root: TreeNode | null): (number | null)[] {
  if (!root) return [null];
  return [root.val, ...inorder(root.left), ...inorder(root.right)];
}

describe('#297 Serialize and Deserialize Binary Tree', () => {
  test('round-trips [1,2,3,null,null,4,5]', () => {
    const t = makeTree([1,2,3,null,null,4,5]);
    expect(inorder(deserialize(serialize(t)))).toEqual(inorder(t));
  });
  test('round-trips null', () => expect(deserialize(serialize(null))).toBe(null));
});
