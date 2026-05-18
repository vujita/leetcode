import { describe, expect, test } from 'vitest';
import { uniquePaths } from './solution.js';

// TRACE=1 npx vitest run 2d-dp/unique-paths

describe('#62 Unique Paths', () => {
  test('m=3,n=7 → 28', () => expect(uniquePaths(3, 7)).toBe(28));
  test('m=3,n=2 → 3',  () => expect(uniquePaths(3, 2)).toBe(3));
  test('m=1,n=1 → 1',  () => expect(uniquePaths(1, 1)).toBe(1));
});
