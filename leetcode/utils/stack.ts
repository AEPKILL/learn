export default class Stack<T> {
  private _stack: T[] = [];
  push(val: T) {
    this._stack.push(val);
  }
  pop() {
    return this._stack.pop();
  }
  empty() {
    return this._stack.length === 0;
  }
  top(): T | undefined {
    return this._stack[this._stack.length - 1];
  }
}
