import React from "react";
import TextDescription from "./TextDescription";
import SoundRecorder from "./SoundRecorder";
import VideoRecorder from "./VideoRecorder";

class ThreatType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDescription: "",
      soundRecording: null,
      VideoRecording: null,
    };
  }

  render() {
    const { handleToggleEmergencyType } = this.props;
    return (
      <div>
        <TextDescription />
        <SoundRecorder />
        <VideoRecorder />
        <button>Submit Info</button>
      </div>
    );
  }
}

export default ThreatType;
