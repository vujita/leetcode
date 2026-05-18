import { describe, expect, test } from 'vitest';
import { topKFrequent } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/top-k-frequent

describe('#347 Top K Frequent Elements', () => {
  test('[1,1,1,2,2,3] k=2 → [1,2]', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2).sort()).toEqual([1,2]);
  });
  test('[1] k=1 → [1]', () => expect(topKFrequent([1], 1)).toEqual([1]));
});
