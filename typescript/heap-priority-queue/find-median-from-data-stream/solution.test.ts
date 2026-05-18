import { describe, expect, test } from 'vitest';
import { MedianFinder } from './solution.js';

// TRACE=1 npx vitest run heap-priority-queue/find-median-from-data-stream

describe('#295 Find Median from Data Stream', () => {
  test('median after each insertion', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    expect(mf.findMedian()).toBe(1.5);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(2);
  });
  test('single element', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    expect(mf.findMedian()).toBe(1);
  });
});
