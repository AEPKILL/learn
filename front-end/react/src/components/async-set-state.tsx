/**
 * this.setState 可能为了性能可能异步执行更新
 * 当新的 state 需要通过旧的 state 计算得到时 ， 需要用 setState(state=>newState) 的方式
 */
import React from 'react';

interface AsyncSetStateState {
  count: number;
}

export default class AsyncSetState extends React.Component<
  {},
  AsyncSetStateState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClickInc = this.handleClickInc.bind(this);
  }
  handleClickInc() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState(state => ({
      count: state.count + 1
    }));
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  render() {
    return (
      <div>
        <h1>Async Set State</h1>
        {this.state.count}
        <div>
          <button onClick={this.handleClickInc}>inc</button>
        </div>
      </div>
    );
  }
}
