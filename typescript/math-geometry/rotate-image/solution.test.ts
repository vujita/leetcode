import { describe, expect, test } from 'vitest';
import { rotate } from './solution.js';

// TRACE=1 npx vitest run math-geometry/rotate-image

describe('#48 Rotate Image', () => {
  test('3×3 matrix', () => {
    const m = [[1,2,3],[4,5,6],[7,8,9]];
    rotate(m);
    expect(m).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
  });
  test('4×4 matrix', () => {
    const m = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
    rotate(m);
    expect(m).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
  });
});
