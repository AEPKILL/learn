/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (32.45%)
 * Total Accepted:    334.5K
 * Total Submissions: 1M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 *
 * Example:
 *
 *
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 *
 *
 */

mountToGlobal('mergeKLists', function(
  lists: Array<NListNode | null>
): NListNode | null {
  // for testcase '[]'
  if (!lists.length) {
    return null;
  }
  // 合并的时候两两合并，防止一个 list 越来越长导致
  while (lists.length > 1) {
    const merged: Array<NListNode | null> = [];
    const len = lists.length;
    for (let i = 0; i < len - 1; i += 2) {
      const l1 = lists[i];
      const l2 = lists[i + 1];
      const mergeResult = merge(l1, l2);
      merged.push(mergeResult);
    }
    if (len % 2) {
      merged.push(lists[len - 1]);
    }
    lists = merged;
  }
  return lists[0];
});

function merge(l1: NListNode | null, l2: NListNode | null) {
  const result = new ListNode(0);
  let head = result;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }

  /**
   * 因为是从小到大合并
   * 比如 [1,2,3,5] merge [4,6,7]
   * 肯定会先消耗掉所有包含较小元素的链表
   * 如果 l1 l2 不同时为空
   * 那么 head 肯定不为空
   */

  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }

  return result.next;
}

// include(./utils/mount-to-global.ts)
