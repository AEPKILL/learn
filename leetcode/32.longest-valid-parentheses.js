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
/// <reference path="./utils/stack.d.ts" />

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  /** @type {Stack<number>} */
  const stack = new Stack();

  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // )))() 需要考虑栈顶是否是 ( 符号
    // 因为栈为空的时候 ) 符号也会入栈
    if (char === ')' && !stack.empty() && s[stack.top] === '(') {
      stack.pop();

      // 栈为空意味着整个字符串是以 "(" 开头 且被完全匹配了
      if (stack.empty()) {
        max = i + 1;
      }
      // 栈不为空
      else {
        // i - stack.top
        // stack.top 是左 "(" 前一个字符
        max = Math.max(max, i - stack.top);
      }
    } else {
      stack.push(i);
    }
  }
  return max;
};

// utils/stack.js
class Stack {
  _stack = [];
  get top() {
    return this._stack[this._stack.length - 1];
  }
  push(val) {
    this._stack.push(val);
  }
  pop() {
    return this._stack.pop();
  }
  empty() {
    return !this._stack.length;
  }
}
