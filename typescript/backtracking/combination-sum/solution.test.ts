import { describe, expect, test } from 'vitest';
import { combinationSum } from './solution.js';

// TRACE=1 npx vitest run backtracking/combination-sum

describe('#39 Combination Sum', () => {
  test('[2,3,6,7] target=7 → [[2,2,3],[7]]', () => {
    const res = combinationSum([2,3,6,7], 7).map(c=>c.sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]);
    expect(res).toEqual([[2,2,3],[7]]);
  });
  test('[2,3,5] target=8 → [[2,2,2,2],[2,3,3],[3,5]]', () => {
    const res = combinationSum([2,3,5], 8).map(c=>c.sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]);
    expect(res).toEqual([[2,2,2,2],[2,3,3],[3,5]]);
  });
});
