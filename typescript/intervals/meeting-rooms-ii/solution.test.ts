import { describe, expect, test } from 'vitest';
import { minMeetingRooms } from './solution.js';

// TRACE=1 npx vitest run intervals/meeting-rooms-ii

describe('#253 Meeting Rooms II', () => {
  test('[[0,30],[5,10],[15,20]] → 2', () => expect(minMeetingRooms([[0,30],[5,10],[15,20]])).toBe(2));
  test('[[7,10],[2,4]] → 1',          () => expect(minMeetingRooms([[7,10],[2,4]])).toBe(1));
});
