import { describe, expect, test } from 'vitest';
import { threeSum } from './solution.js';

// TRACE=1 npx vitest run two-pointers/three-sum

describe('#15 3Sum', () => {
  test('[-1,0,1,2,-1,-4]', () => {
    const res = threeSum([-1,0,1,2,-1,-4]).map(t => t.sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]);
    expect(res).toEqual([[-1,-1,2],[-1,0,1]]);
  });
  test('[0,1,1] → []',    () => expect(threeSum([0,1,1])).toEqual([]));
  test('[0,0,0] → [[0,0,0]]', () => expect(threeSum([0,0,0])).toEqual([[0,0,0]]));
});
