/// <reference path="./type.d.ts" />

class ListNode<T> {
  public next: Nullable<ListNode<T>>;
  public val: Nullable<T>;
  constructor(val: T);
}
