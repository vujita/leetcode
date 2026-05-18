import { describe, expect, test } from 'vitest';
import { eraseOverlapIntervals } from './solution.js';

// TRACE=1 npx vitest run intervals/non-overlapping-intervals

describe('#435 Non-overlapping Intervals', () => {
  test('[[1,2],[2,3],[3,4],[1,3]] → 1', () => expect(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])).toBe(1));
  test('[[1,2],[1,2],[1,2]] → 2',       () => expect(eraseOverlapIntervals([[1,2],[1,2],[1,2]])).toBe(2));
  test('[[1,2],[2,3]] → 0',             () => expect(eraseOverlapIntervals([[1,2],[2,3]])).toBe(0));
});
