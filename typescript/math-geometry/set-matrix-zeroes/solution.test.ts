import { describe, expect, test } from 'vitest';
import { setZeroes } from './solution.js';

// TRACE=1 npx vitest run math-geometry/set-matrix-zeroes

describe('#73 Set Matrix Zeroes', () => {
  test('3×3 with center zero', () => {
    const m = [[1,1,1],[1,0,1],[1,1,1]]; setZeroes(m);
    expect(m).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
  });
  test('corner zeros', () => {
    const m = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]; setZeroes(m);
    expect(m).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]);
  });
});
