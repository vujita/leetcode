/**
 * Learning trace utility. Enable with: TRACE=1 npx vitest run path/to/test
 *
 * Usage in solutions:
 *   import { trace } from '../../_utils/trace';
 *   trace.step('checking i=0', { val: nums[0], map });
 *   trace.array(nums, { L: left, R: right });
 */

const enabled = process.env['TRACE'] === '1';

function log(...args: unknown[]) {
  if (enabled) console.log(...args);
}

export const trace = {
  step(label: string, data?: unknown) {
    if (!enabled) return;
    console.log(`\n  → ${label}`);
    if (data !== undefined) {
      console.log('    ', typeof data === 'string' ? data : JSON.stringify(data));
    }
  },

  /**
   * Visualize an array with optional named pointer annotations.
   *
   * trace.array([2, 7, 11, 15], { L: 0, R: 3 });
   *   2   7  11  15
   *  L              R
   */
  array<T>(arr: T[], pointers: Record<string, number> = {}, highlight: number[] = []) {
    if (!enabled) return;
    const WIDTH = 4;
    const vals = arr
      .map((v, i) => {
        const s = String(v).padStart(WIDTH - 1);
        return highlight.includes(i) ? `[${s}]` : ` ${s} `;
      })
      .join('');

    const ptrNames = Object.entries(pointers);
    const ptrLine = arr
      .map((_, i) => {
        const names = ptrNames.filter(([, idx]) => idx === i).map(([n]) => n);
        return names.join('/').padEnd(WIDTH);
      })
      .join('');

    log('  ' + vals);
    if (ptrNames.length > 0) log('  ' + ptrLine);
  },

  /**
   * Visualize a stack (top on right).
   *
   * trace.stack([1, 2, 3]);
   *   stack: [ 1  2  3 ] ← top
   */
  stack<T>(stack: T[]) {
    if (!enabled) return;
    const inner = stack.map((v) => String(v).padStart(3)).join('  ');
    log(`  stack: [${inner} ] ← top`);
  },

  /**
   * Visualize a simple linked list (values only).
   *
   * trace.linkedList([1, 2, 3, 4]);
   *   1 → 2 → 3 → 4 → null
   */
  linkedList<T>(nodes: T[]) {
    if (!enabled) return;
    log('  ' + [...nodes, 'null'].join(' → '));
  },

  /**
   * Visualize a binary tree given as an array (LeetCode level-order format).
   * null entries mark missing nodes.
   *
   * trace.binaryTree([4, 2, 6, 1, 3, 5, 7]);
   *        4
   *      /   \
   *     2     6
   *    / \   / \
   *   1   3 5   7
   */
  binaryTree(nodes: (number | null)[]) {
    if (!enabled) return;
    if (nodes.length === 0) { log('  (empty tree)'); return; }

    const height = Math.floor(Math.log2(nodes.length)) + 1;
    let idx = 0;
    for (let level = 0; level < height; level++) {
      const count = Math.pow(2, level);
      const indent = ' '.repeat(Math.pow(2, height - level) - 1);
      const gap = ' '.repeat(Math.pow(2, height - level + 1) - 1);
      const row = [];
      for (let i = 0; i < count && idx < nodes.length; i++, idx++) {
        row.push(nodes[idx] === null ? ' ' : String(nodes[idx]));
      }
      log('  ' + indent + row.join(gap));
    }
  },

  /** Visualize a map/hashmap as key→value pairs. */
  map<K, V>(map: Map<K, V>, label = 'map') {
    if (!enabled) return;
    const entries = [...map.entries()].map(([k, v]) => `${k}→${v}`).join(', ');
    log(`  ${label}: { ${entries} }`);
  },

  divider(label = '') {
    if (!enabled) return;
    log('\n  ' + '─'.repeat(40) + (label ? ` ${label}` : ''));
  },
};
