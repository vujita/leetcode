import { describe, expect, test } from 'vitest';
import { merge } from './solution.js';

// TRACE=1 npx vitest run intervals/merge-intervals

describe('#56 Merge Intervals', () => {
  test('[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]', () => expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]));
  test('[[1,4],[4,5]] → [[1,5]]',                               () => expect(merge([[1,4],[4,5]])).toEqual([[1,5]]));
});
