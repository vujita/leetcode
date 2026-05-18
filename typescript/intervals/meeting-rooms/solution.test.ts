import { describe, expect, test } from 'vitest';
import { canAttendMeetings } from './solution.js';

// TRACE=1 npx vitest run intervals/meeting-rooms

describe('#252 Meeting Rooms', () => {
  test('[[0,30],[5,10],[15,20]] → false', () => expect(canAttendMeetings([[0,30],[5,10],[15,20]])).toBe(false));
  test('[[7,10],[2,4]] → true',           () => expect(canAttendMeetings([[7,10],[2,4]])).toBe(true));
});
