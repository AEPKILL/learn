/// <reference path="./type.d.ts" />
declare class DoubleListNode<T> {
  public pre: Nullable<DoubleListNode<T>>;
  public next: Nullable<DoubleListNode<T>>;
  public val: Nullable<T>;
  constructor(val: T);
  addNext(val: T);
  addNext(node: DoubleListNode<T> | T);
  addPre(val: T);
  addPre(node: DoubleListNode<T> | T);
  remove();
}
