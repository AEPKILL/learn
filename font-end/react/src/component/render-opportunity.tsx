/**
 * Render 函数执行的时机
 * 1. Props 改变时
 * 2. State 改变时
 * 3. 父组件重新渲染时
 */
import React from 'react';
import { BindThis } from '../utils/bind-this';

const Children: React.FunctionComponent = () => {
  console.log('render children');
  return <div>children</div>;
};

const Children2: React.FunctionComponent = React.memo(() => {
  console.log('render children2');
  return <div>children</div>;
});

@BindThis
export default class RenderOpportunity extends React.Component<
  {},
  { value: string }
> {
  state = {
    value: ''
  };
  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    this.setState(() => ({ value }));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <Children />
        <Children2 />
        <p>{this.state.value}</p>
      </div>
    );
  }
}
