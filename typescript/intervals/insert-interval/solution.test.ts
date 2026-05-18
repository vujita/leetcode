import { describe, expect, test } from 'vitest';
import { insert } from './solution.js';

// TRACE=1 npx vitest run intervals/insert-interval

describe('#57 Insert Interval', () => {
  test('[[1,3],[6,9]] + [2,5] → [[1,5],[6,9]]', () => expect(insert([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]));
  test('[[1,2],[3,5],[6,7],[8,10],[12,16]] + [4,8] → [[1,2],[3,10],[12,16]]', () => expect(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toEqual([[1,2],[3,10],[12,16]]));
  test('[] + [5,7] → [[5,7]]', () => expect(insert([], [5,7])).toEqual([[5,7]]));
});
