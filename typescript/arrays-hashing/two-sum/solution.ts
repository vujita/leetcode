import { trace } from '../../_utils/trace.js';

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    trace.step(`i=${i}  val=${nums[i]}  need=${complement}`);
    trace.array(nums, { i });
    trace.map(seen);

    if (seen.has(complement)) {
      trace.step(`found! indices [${seen.get(complement)}, ${i}]`);
      return [seen.get(complement)!, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}
