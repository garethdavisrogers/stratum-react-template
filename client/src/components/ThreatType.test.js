import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ThreatType from "./ThreatType";

describe("<ThreatType/>", () => {
  it("renders", () => {
    render(<ThreatType />);
  });
  it("medical", () => {
    const { getByText } = render(<ThreatType />);
    getByText(/medical/i);
  });
  it("fire", () => {
    const { getByText } = render(<ThreatType />);
    getByText(/fire/i);
  });
  it("human threat", () => {
    const { getByText } = render(<ThreatType />);
    getByText(/human threat/i);
  });
});
