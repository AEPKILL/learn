import { Nullable } from './type';
export default class DoubleListNode<T> {
  public pre: Nullable<DoubleListNode<T>> = null;
  public next: Nullable<DoubleListNode<T>> = null;
  constructor(public val: T) {}
  addNext(val: T);
  addNext(node: DoubleListNode<T> | T) {
    if (node instanceof DoubleListNode) {
      this.next = node;
      node.pre = this;
    } else {
      this.next = new DoubleListNode(node);
      this.next.pre = this;
    }
  }
  addPre(val: T);
  addPre(node: DoubleListNode<T> | T) {
    if (node instanceof DoubleListNode) {
      this.pre = node;
      node.pre = this;
    } else {
      this.pre = new DoubleListNode(node);
      this.pre.next = this;
    }
  }
  remove() {
    if (this.pre) {
      this.pre.next = this.next;
    }
    if (this.next) {
      this.next.pre = this.pre;
    }
  }
}
