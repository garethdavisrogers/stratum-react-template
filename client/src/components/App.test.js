import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
});
