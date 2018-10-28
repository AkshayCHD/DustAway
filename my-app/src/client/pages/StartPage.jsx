import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../StartPage.css";

class StartPage extends Component {
  constructor(props) {
    super(props);
  }

  getStarted() {
    this.props.history.push("/Leaderboard");
  }

  render() {
    return (
      <div className="back">
        <div>
          <img className="Logo" src={logo} height="200px" />
          <h1>DustAway</h1>
          <p>-"Cuz it's the best we can do"</p>
          <button onClick={this.getStarted.bind(this)}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default StartPage;
