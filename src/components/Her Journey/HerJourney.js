import React, { Component } from "react";
import Timeline from "./Timeline";
class HerJourney extends Component {
  constructor() {
    super();
    this.state = {
      timelines: []
    };
  }

  render() {
    const displayTimelines = this.state.timelines.map(
      (timeline, timelineIndex) => {
        return <Timeline key={timelineIndex} timelineDatas={timeline} />;
      }
    );
    return (
      <div>
        <h1>Her Journey</h1>
        <div id="timelines">{displayTimelines}</div>
      </div>
    );
  }
  componentDidMount() {
    fetch("http://localhost:3000/timelines")
      .then(data => {
        return data.json();
      })
      .then(data =>
        this.setState({
          timelines: data
        })
      );
  }
}
export default HerJourney;