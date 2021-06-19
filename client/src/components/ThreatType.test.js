import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ThreatType from "./ThreatType";

describe("<ThreatType/>", () => {
  it("renders 3 options", () => {
    render(<ThreatType />);
  });
});
