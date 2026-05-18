import { describe, expect, test } from 'vitest';
import { countComponents } from './solution.js';

// TRACE=1 npx vitest run graphs/number-of-connected-components

describe('#323 Number of Connected Components', () => {
  test('n=5 [[0,1],[1,2],[3,4]] → 2',        () => expect(countComponents(5, [[0,1],[1,2],[3,4]])).toBe(2));
  test('n=5 [[0,1],[1,2],[2,3],[3,4]] → 1',  () => expect(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])).toBe(1));
});
