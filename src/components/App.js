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
    this.intervalId = setInterval(() => {
      this.setState = { date: new Date() };
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

export default App;
