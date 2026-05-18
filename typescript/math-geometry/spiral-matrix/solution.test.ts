import { describe, expect, test } from 'vitest';
import { spiralOrder } from './solution.js';

// TRACE=1 npx vitest run math-geometry/spiral-matrix

describe('#54 Spiral Matrix', () => {
  test('3×3 → [1,2,3,6,9,8,7,4,5]',         () => expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]));
  test('3×4 → [1,2,3,4,8,12,11,10,9,5,6,7]', () => expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7]));
});
