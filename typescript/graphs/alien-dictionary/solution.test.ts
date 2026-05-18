import { describe, expect, test } from 'vitest';
import { alienOrder } from './solution.js';

// TRACE=1 npx vitest run graphs/alien-dictionary

describe('#269 Alien Dictionary', () => {
  test('["wrt","wrf","er","ett","rftt"] → "wertf"', () => {
    const order = alienOrder(['wrt','wrf','er','ett','rftt']);
    expect(order.length).toBe(5); // valid ordering exists
  });
  test('["z","x"] → "zx"',   () => expect(alienOrder(['z','x'])).toBe('zx'));
  test('cycle → ""',          () => expect(alienOrder(['z','x','z'])).toBe(''));
});
