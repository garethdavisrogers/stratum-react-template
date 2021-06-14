import React from "react";
import axios from "axios";
import ThreatType from "./ThreatType.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
      activateButtonText: "Activate FRS",
      medical: false,
      fire: false,
      humanThreat: false,
    };
    this.handleActivateFRS = this.handleActivateFRS.bind(this);
    this.handleToggleEmergencyType = this.handleToggleEmergencyType.bind(this);
  }

  handleActivateFRS() {
    this.setState({ active: true, activateButtonText: "FRS Activated" });
    axios.get("/activate").then((response) => console.log(response));
  }

  handleToggleEmergencyType(e) {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  }

  render() {
    const { active, activateButtonText } = this.state;
    return (
      <div>
        <button onClick={this.handleActivateFRS}>{activateButtonText}</button>
        {active && (
          <ThreatType
            handleToggleEmergencyType={this.handleToggleEmergencyType}
          />
        )}
      </div>
    );
  }
}

export default App;
