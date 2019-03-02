/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 *
 * https://leetcode.com/problems/valid-number/description/
 *
 * algorithms
 * Hard (13.70%)
 * Total Accepted:    114.5K
 * Total Submissions: 830.6K
 * Testcase Example:  '"0"'
 *
 * Validate if a given string can be interpreted as a decimal number.
 *
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 *
 * Note: It is intended for the problem statement to be ambiguous. You should
 * gather all requirements up front before implementing one. However, here is a
 * list of characters that can be in a valid decimal number:
 *
 *
 * Numbers 0-9
 * Exponent - "e"
 * Positive/negative sign - "+"/"-"
 * Decimal point - "."
 *
 *
 * Of course, the context of these characters also matters in the input.
 *
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your
 * function signature accepts a const char * argument, please click the reload
 * button to reset your code definition.
 *
 */
namespace $65_valid_number {
  const isNumberSymbol = (s: string) => /\d/.test(s);
  const isPMSymbol = (s: string) => s === '+' || s === '-';
  const isPointSymbol = (s: string) => s === '.';
  const isExponentSymbol = (s: string) => s === 'e';
  const enum STATE {
    INIT,
    /** 寻找整数部分 */
    S1,
    /** 寻找小数部分 */
    S2,
    /** 寻找指数部分 */
    S3,
    ERROR
  }
  const stateTransform: { [index: number]: (s: string) => STATE } = {
    [STATE.INIT](s: string) {
      if (isNumberSymbol(s) || isPMSymbol(s)) {
        return STATE.S1;
      }
      return STATE.ERROR;
    },
    [STATE.S1](s: string) {
      if (isNumberSymbol(s)) {
        return STATE.S1;
      } else if (isPointSymbol(s)) {
        return STATE.S2;
      } else if (isExponentSymbol(s)) {
        return STATE.S3;
      }
      return STATE.ERROR;
    },
    [STATE.S2](s: string) {
      if (isNumberSymbol(s)) {
        return STATE.S2;
      } else if (isExponentSymbol(s)) {
        return STATE.S3;
      }
      return STATE.ERROR;
    },
    [STATE.S3](s: string) {
      if (isNumberSymbol(s)) {
        return STATE.S3;
      }
      return STATE.ERROR;
    }
  };
  export const isNumber = function(s: string) {
    let state = STATE.INIT;
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
      const symbol = s[i];
      state = stateTransform[state](symbol);
      if (state === STATE.ERROR) {
        return false;
      }
    }
    return state !== STATE.INIT;
  };
}

mountNsToGlobal($65_valid_number);

// include (./utils/mount-to-global.ts)
