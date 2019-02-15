/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (24.84%)
 * Total Accepted:    271.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 *
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 *
 * Example 2:
 *
 *
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the precedeng element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 *
 *
 * Example 3:
 *
 *
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 *
 * Example 4:
 *
 *
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore
 * it matches "aab".
 *
 *
 * Example 5:
 *
 *
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 *
 *
 */

// 不使用缓存大概 200ms+
// 使用缓存大概 90 - 100ms

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const cache = new Map();
  return isMatchCore(s, p, 0, 0);

  function isMatchCore(
    /** @type {string} */ s,
    /** @type {string} */ p,
    /** @type {number} */ i,
    /** @type {number} */ j
  ) {
    const key = `${i}_${j}`;
    let matchLens = 0;
    if (cache.has(key)) {
      return cache.get(key);
    }
    while (j < p.length) {
      const char = s[i];
      const matchChar = p[j];
      const isLayzMatchChar = p[j + 1] === '*';

      // 符号被星号修饰 需要执行懒查询
      if (isLayzMatchChar) {
        let matchLens = 0;
        while (i < s.length) {
          // 首先尝试不匹配任何字符
          const isMatched = isMatchCore(s, p, i, j + 2);
          if (isMatched) {
            cache.set(key, true);
            return true;
          }
          matchLens = commonSingleCharMatch(s[i], matchChar);
          // 匹配了 0 个字符
          if (!matchLens) {
            break;
          }
          i++;
        }
        j += 2;
      }
      // 单字符匹配
      else {
        matchLens = commonSingleCharMatch(char, matchChar);
        if (!matchLens) {
          cache.set(key, false);
          return false;
        }
        i++;
        j++;
      }
    }

    const result = i === s.length;
    cache.set(key, result);
    return result;
  }
};

// 通用匹配
function commonSingleCharMatch(
  /** @type {string} */ ch,
  /** @type {string} */ matchCh
) {
  if (ch === matchCh || matchCh === '.') {
    return 1;
  }
  return 0;
}
