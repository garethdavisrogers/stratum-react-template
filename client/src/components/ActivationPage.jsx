import React from "react";
import axios from "axios";
import ThreatType from "./ThreatType";

class ActivationPage extends React.Component {
  constructor() {
    super();

    this.state = {
      threatTypes: [],
      threatTypeSubmit: false,
      incidentStartTime: null,
      timeElapsed: "0",
    };
    this.handleActivateFRS = this.handleActivateFRS.bind(this);
    this.handleToggleEmergencyType = this.handleToggleEmergencyType.bind(this);
    this.handleFormatTime = this.handleFormatTime.bind(this);
    this.handleGetTime = this.handleGetTime.bind(this);
  }

  handleActivateFRS() {
    let incidentStartTime = new Date();
    this.setState({
      active: true,
      incidentStartTime: incidentStartTime.toLocaleTimeString(),
    });
    axios.get("/activate").then((response) => {
      console.log(response);
      this.handleGetTime();
    });
  }

  handleToggleEmergencyType(e) {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  }

  handleFormatTime(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  handleGetTime() {
    const { timeElapsed } = this.state;
    const incidentTime = new Date();
    setInterval((timeElapsed) => {
      let currentTime = new Date();
      let totalTime = currentTime - incidentTime;
      let formattedTime = this.handleFormatTime(totalTime);
      this.setState({ timeElapsed: formattedTime });
    }, 1000);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/threatTypes")
      .then((response) => {
        response.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { active, timeElapsed } = this.state;
    return (
      <div className="activation-page">
        {!active && (
          <button
            className="activation-button"
            onClick={this.handleActivateFRS}
          >
            Click here to activate FRS
          </button>
        )}
        {active && (
          <div>
            <div>Time Elapsed: {timeElapsed}</div>
            FRS Activated, authorities notified. Please pick the option or
            options that best describe the situation:
            <ThreatType
              threatTypes={this.threatTypes}
              handleToggleEmergencyType={this.handleToggleEmergencyType}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ActivationPage;
