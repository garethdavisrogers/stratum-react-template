import React from "react";

const ThreatType = (props) => {
  return (
    <div>
      <div>
        Medical
        <input
          name="medical"
          type="checkbox"
          value={false}
          onChange={props.handleToggleEmergencyType}
        />
      </div>
      <div>
        Fire
        <input type="checkbox" />
      </div>
      <div>
        Human Threat
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default ThreatType;
