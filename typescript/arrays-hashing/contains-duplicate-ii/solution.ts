// #219 Contains Duplicate II
// Return true if there are two distinct indices i and j such that
// nums[i] == nums[j] and abs(i - j) <= k.
// Example: [1,2,3,1], k=3 → true  |  [1,2,3,1,2,3], k=2 → false
// LeetCode:  https://leetcode.com/problems/contains-duplicate-ii/
// NeetCode:  https://neetcode.io/problems/contains-duplicate-ii

export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) {
    return false
  }
  const seen = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (seen.has(n)) {
      return true
    }
    if (i >= k) {
      seen.delete(nums[i - k])
    }
    seen.add(n)

  }
  return false;
}
