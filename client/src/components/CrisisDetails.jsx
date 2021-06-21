import React from "react";

class CrisisDetail extends React.Component {
  constructor(){
    super();

    this.state = {
      crisisDescription: '';
    }
  }
  render(){
    return <div><div>Describe the threat to the best of your ability.  I.E. direction in relation to your location of the threat, number of people in the area, description of the threat.  Each submission will be logged for first responders to apply.</div><textarea/></div>
  }
}

export default CrisisDetail;