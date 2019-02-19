declare class Stack<T> {
  readonly top: T | undefined;
  private _stack: T[];
  push(val: T);
  pop(): T | undefined;
  empty(): boolean;
}
