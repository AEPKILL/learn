/**
 * Props 上传递的 children 会被真正的子元素覆盖掉覆盖掉
 */
import * as React from 'react';
interface TestComponentProps {
  children?: string;
}

const TestComponent = React.memo<TestComponentProps>(props => {
  return <div>{props.children}</div>;
});

export default class ChildrenComponent extends React.Component {
  // 输出 2
  render() {
    // <TestComponent children="1">2</TestComponent> 也会输出 2
    return <TestComponent>2</TestComponent>;
  }
}
