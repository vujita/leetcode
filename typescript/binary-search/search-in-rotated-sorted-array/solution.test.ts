import { describe, expect, test } from 'vitest';
import { search } from './solution.js';

// TRACE=1 npx vitest run binary-search/search-in-rotated-sorted-array

describe('#33 Search in Rotated Sorted Array', () => {
  test('[4,5,6,7,0,1,2] target=0 → 4',  () => expect(search([4,5,6,7,0,1,2], 0)).toBe(4));
  test('[4,5,6,7,0,1,2] target=3 → -1', () => expect(search([4,5,6,7,0,1,2], 3)).toBe(-1));
  test('[1] target=0 → -1',             () => expect(search([1], 0)).toBe(-1));
});
