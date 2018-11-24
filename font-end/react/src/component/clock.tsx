import * as React from 'react';

interface ClockProps {}

interface ClockState {
  date: Date;
}

class Clock extends React.Component<ClockProps, ClockState> {
  private timer: number;
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  }
  public render(): JSX.Element {
    return (
      <div className="Clock">
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
  public componentDidMount() {
    this.timer = window.setInterval(this.tick, 1000);
  }
  public componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }
  private tick() {
    this.setState({ date: new Date() });
  }
}

export default Clock;
