/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (24.73%)
 * Total Accepted:    170.5K
 * Total Submissions: 687.3K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 *
 *
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 *
 *
 * Example 2:
 *
 *
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // )))() 需要考虑栈顶是否是 ( 符号
    // 因为栈为空的时候 ) 符号也会入栈
    if (char === ')' && stack.length && s[top(stack)] === '(') {
      stack.pop();
      if (stack.length) {
        // i - stack.top
        // stack.top 是左 "(" 前一个字符
        max = Math.max(max, i - top(stack));
      }
      // 意味着整个字符串是以 "(" 开头 且被完全匹配了
      else {
        max = i + 1;
      }
    } else {
      stack.push(i);            
    }
  }
  return max;
};

function top(s) {
  return s[s.length - 1];
}
