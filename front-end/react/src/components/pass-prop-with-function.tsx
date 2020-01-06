import React from 'react';
import { BindThis } from '../utils/bind-this';

interface ChildrenComponentProps {
  onClick: () => void;
}

@BindThis
class ChildrenComponent extends React.Component<ChildrenComponentProps> {
  render() {
    return <div onClick={this.handleClick}>Children</div>;
  }
  handleClick() {
    this.props.onClick();
  }
}

@BindThis
// tslint:disable-next-line: max-classes-per-file
export default class PassPropWithFunction extends React.Component {
  render() {
    return <ChildrenComponent onClick={this.handClick} />;
  }
  handClick() {
    console.log(this);
  }
}
