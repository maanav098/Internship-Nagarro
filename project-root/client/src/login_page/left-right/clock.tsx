import React from "react";

interface ClockState {
  date: Date;
}

function FormattedDate(props: any) {
  return <h2>{props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component<{}, ClockState> {
  private timerID?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Current Time: </h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;