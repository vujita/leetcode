// #217 Contains Duplicate
// Return true if any value appears at least twice in nums.
// Example: [1,2,3,1] → true  |  [1,2,3,4] → false
// LeetCode:  https://leetcode.com/problems/contains-duplicate/
// NeetCode:  https://neetcode.io/problems/contains-duplicate

export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>()
  for (const n of nums) {
    if (seen.has(n)) {
      return true
    }
    seen.add(n)
  }
  return false;
}
