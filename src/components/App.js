import React from "react";
import moment from "moment";

import Square from "./Square";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const now = moment();
      const end = moment().endOf(this.props.timeline);

      const days = end.diff(now, "days");
      const hours = end.diff(now, "hours") % 24;
      const minutes = end.diff(now, "minutes") % 60;
      const seconds = end.diff(now, "seconds") % 60;

      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const layout = this.props.layout || ["days", "hours", "minutes", "seconds"];
    const color_theme = this.props.color_theme || "color";

    return (
      <div className="text-center">
        {layout.map(square => {
          return (
            <Square
              key={square}
              value={this.state[square]}
              desc={square}
              color_theme={color_theme}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
