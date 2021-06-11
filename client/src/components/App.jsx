import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
    this.handleActivateFRS = this.handleActivateFRS.bind(this);
  }

  handleActivateFRS() {
    debugger;
    this.setState({ active: true });
    axios.get("/activate").then((response) => console.log(response));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleActivateFRS}>Activate</button>
      </div>
    );
  }
}

export default App;
