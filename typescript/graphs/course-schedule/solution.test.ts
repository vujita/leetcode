import { describe, expect, test } from 'vitest';
import { canFinish } from './solution.js';

// TRACE=1 npx vitest run graphs/course-schedule

describe('#207 Course Schedule', () => {
  test('2 courses [[1,0]] → true',     () => expect(canFinish(2, [[1,0]])).toBe(true));
  test('2 courses [[1,0],[0,1]] → false', () => expect(canFinish(2, [[1,0],[0,1]])).toBe(false));
});
