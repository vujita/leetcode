import { describe, expect, test } from 'vitest';
import { GraphNode, cloneGraph } from './solution.js';

// TRACE=1 npx vitest run graphs/clone-graph

describe('#133 Clone Graph', () => {
  test('clones 4-node cycle', () => {
    const n1 = new GraphNode(1), n2 = new GraphNode(2), n3 = new GraphNode(3), n4 = new GraphNode(4);
    n1.neighbors = [n2, n4]; n2.neighbors = [n1, n3]; n3.neighbors = [n2, n4]; n4.neighbors = [n1, n3];
    const clone = cloneGraph(n1)!;
    expect(clone).not.toBe(n1);          // deep copy
    expect(clone.val).toBe(1);
    expect(clone.neighbors.length).toBe(2);
    expect(clone.neighbors[0].val).toBe(2);
  });
  test('null → null', () => expect(cloneGraph(null)).toBe(null));
});
