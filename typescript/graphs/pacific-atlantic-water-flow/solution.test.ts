import { describe, expect, test } from 'vitest';
import { pacificAtlantic } from './solution.js';

// TRACE=1 npx vitest run graphs/pacific-atlantic-water-flow

describe('#417 Pacific Atlantic Water Flow', () => {
  test('standard case', () => {
    const res = pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]);
    const sorted = res.map(r=>r.join(',')).sort();
    expect(sorted).toEqual(['0,4','1,3','1,4','2,2','3,0','3,1','4,0']);
  });
  test('1x1 → [[0,0]]', () => expect(pacificAtlantic([[1]])).toEqual([[0,0]]));
});
