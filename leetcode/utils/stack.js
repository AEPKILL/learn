class Stack {
  _stack = [];
  push(val) {
    this._stack.push(val);
  }
  pop() {
    return this._stack.pop();
  }
  empty() {
    return !this._stack.length;
  }
  top() {
    return this._stack[this._stack.length - 1];
  }
}
