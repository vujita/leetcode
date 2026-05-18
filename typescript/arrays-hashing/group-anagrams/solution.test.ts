import { describe, expect, test } from 'vitest';
import { groupAnagrams } from './solution.js';

// TRACE=1 npx vitest run arrays-hashing/group-anagrams

describe('#49 Group Anagrams', () => {
  test('groups correctly', () => {
    const result = groupAnagrams(['eat','tea','tan','ate','nat','bat']);
    const sorted = result.map(g => g.sort()).sort((a,b) => a[0].localeCompare(b[0]));
    expect(sorted).toEqual([['ate','eat','tea'],['bat'],['nat','tan']]);
  });
  test('[""] → [[""]]', () => expect(groupAnagrams([''])).toEqual([['']]));
  test('["a"] → [["a"]]', () => expect(groupAnagrams(['a'])).toEqual([['a']]));
});
