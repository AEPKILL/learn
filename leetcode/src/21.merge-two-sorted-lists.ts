/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.35%)
 * Total Accepted:    504K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
namespace merge_two_lists {
  const mergeTwoLists = function(
    l1: Nullable<NListNode>,
    l2: Nullable<NListNode>
  ): Nullable<NListNode> {
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
  };

  mountToGlobal('mergeTwoLists', mergeTwoLists);
  // include(./utils/mount-to-global.ts)
}
