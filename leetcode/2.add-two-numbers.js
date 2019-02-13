/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.37%)
 * Total Accepted:    739.6K
 * Total Submissions: 2.4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === null || l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let result, head;
  result = head = new ListNode(0);
  while (l1 || l2) {
    if (l1) {
      head.val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      head.val += l2.val;
      l2 = l2.next;
    }
    if (head.val >= 10) {
      // 十位
      const tenBits = (head.val / 10) >> 0;
      // 个位
      const bits = head.val % 10;
      head.val = bits;
      head = head.next = new ListNode(tenBits);
    } else {
      if (l1 || l2) {
        head = head.next = new ListNode(0);
      }
    }
  }
  return result;
};
