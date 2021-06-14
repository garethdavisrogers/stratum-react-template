import React from "react";

const ThreatType = (props) => {
  const { handleToggleEmergencyType } = props;
  return (
    <div>
      <div>
        Medical
        <input
          name="medical"
          type="checkbox"
          onChange={handleToggleEmergencyType}
        />
      </div>
      <div>
        Fire
        <input
          name="fire"
          type="checkbox"
          onChange={handleToggleEmergencyType}
        />
      </div>
      <div>
        Human Threat
        <input
          name="humanThreat"
          type="checkbox"
          onChange={handleToggleEmergencyType}
        />
      </div>
    </div>
  );
};

export default ThreatType;
