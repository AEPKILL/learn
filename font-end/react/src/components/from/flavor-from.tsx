import * as React from 'react';

import { BindThis } from '../../utils/bind-this';

interface FlavorFromProps {}

interface FlavorFromState {
  value: string;
}

@BindThis
class FlavorFrom extends React.Component<FlavorFromProps, FlavorFromState> {
  public handleClik() {
    console.log(this);
  }
  public render(): JSX.Element {
    return <span onClick={this.handleClik}>FlavorFrom</span>;
  }
}

export default FlavorFrom;
