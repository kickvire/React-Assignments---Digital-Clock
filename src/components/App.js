import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

export default App;
