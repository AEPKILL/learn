/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.27%)
 * Total Accepted:    374.6K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var findMedianSortedArrays = function(a, b) {
  let aLen = a.length;
  let bLen = b.length;
  const median = Math.ceil((aLen + bLen) / 2);
  const isOddLen = (aLen + bLen) % 2 === 0;

  // make sure aLen >= bLen
  if (aLen < bLen) {
    [aLen, bLen] = [bLen, aLen];
    [a, b] = [b, a];
  }

  let i = 0; // pointer for a
  let j = 0; // pointer for b
  let iMin = 0;
  let iMax = aLen - 1;
  while (iMin <= iMax) {
    i = Math.ceil((iMin + iMax) / 2); // binary search
    j = median - i;
  }

  return 0;
};

findMedianSortedArrays([1, 3], [2]);
