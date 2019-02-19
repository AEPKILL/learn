import { Nullable } from './type';

export class ListNode<T> {
  public next: Nullable<ListNode<T>> = null;
  constructor(public val: T) {}
}
