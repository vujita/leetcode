// LeetCode:  https://leetcode.com/problems/two-sum/
// NeetCode:  https://neetcode.io/problems/two-sum


export function twoSum(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return []
  }
  // number -> index map
  const indexMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const complementIndex = indexMap.get(target - n)
    if (complementIndex !== undefined) {
      return [i, complementIndex]
    }
    indexMap.set(n, i)
  }
  return []
}
