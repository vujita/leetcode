// #133 Clone Graph
// Return a deep copy of a connected undirected graph (each node has val and neighbors).

export class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val = 0, neighbors: GraphNode[] = []) {
    this.val = val; this.neighbors = neighbors;
  }
}

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  // TODO
  return null;
}
