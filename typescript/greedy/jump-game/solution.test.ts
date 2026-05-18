import { describe, expect, test } from 'vitest';
import { canJump } from './solution.js';

// TRACE=1 npx vitest run greedy/jump-game

describe('#55 Jump Game', () => {
  test('[2,3,1,1,4] → true',  () => expect(canJump([2,3,1,1,4])).toBe(true));
  test('[3,2,1,0,4] → false', () => expect(canJump([3,2,1,0,4])).toBe(false));
  test('[0] → true',          () => expect(canJump([0])).toBe(true));
});
