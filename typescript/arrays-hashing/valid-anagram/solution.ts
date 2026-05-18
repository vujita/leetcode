// #242 Valid Anagram
// Return true if t is an anagram of s.
// Example: "anagram","nagaram" → true  |  "rat","car" → false
// LeetCode:  https://leetcode.com/problems/valid-anagram/
// NeetCode:  https://neetcode.io/problems/valid-anagram

export function isAnagram(s: string, t: string): boolean {
  const charCount = new Array(128).fill(0)

  for (let sIndex = 0; sIndex < s.length; sIndex++) {
    const charIndex = s.charCodeAt(sIndex);
    charCount[charIndex] += 1
  }

  for (let tIndex = 0; tIndex < t.length; tIndex++) {
    const charIndex = t.charCodeAt(tIndex);
    charCount[charIndex] -= 1
  }
  for (const c of charCount) {
    if (c !== 0) {
      return false
    }
  }
  // if not fail
  return true;
}
