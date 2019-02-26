/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.01%)
 * Total Accepted:    190.7K
 * Total Submissions: 677.1K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 *
 * Example 1:
 *
 *
 * Input: [1,2,0]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: [3,4,-1,1]
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 *
 * Note:
 *
 * Your algorithm should run in O(n) time and uses constant extra space.
 *
 */
namespace $44first_missing_positive {
  export const firstMissingPositive = function(nums: number[]) {
    const back = new Array<number>(nums.length);
    for (const num of nums) {
      if (num > 0 && num <= nums.length) {
        back[num - 1] = num;
      }
    }
    for (let i = 0; i < back.length; i++) {
      const num = back[i];
      if (num == undefined) {
        return i + 1;
      }
    }
    return back.length + 1;
  };
}

mountNsToGlobal($44first_missing_positive);

// include (./utils/mount-to-global.ts)
