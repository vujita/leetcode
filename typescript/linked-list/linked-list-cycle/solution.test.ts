import { describe, expect, test } from 'vitest';
import { ListNode } from '../../_utils/types.js';
import { hasCycle } from './solution.js';

// TRACE=1 npx vitest run linked-list/linked-list-cycle

describe('#141 Linked List Cycle', () => {
  test('cycle exists → true', () => {
    const a = new ListNode(3), b = new ListNode(2), c = new ListNode(0), d = new ListNode(-4);
    a.next = b; b.next = c; c.next = d; d.next = b; // cycle at pos 1
    expect(hasCycle(a)).toBe(true);
  });
  test('no cycle → false', () => {
    const a = new ListNode(1), b = new ListNode(2);
    a.next = b;
    expect(hasCycle(a)).toBe(false);
  });
  test('single node no cycle → false', () => expect(hasCycle(new ListNode(1))).toBe(false));
});
