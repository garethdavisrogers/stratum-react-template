import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders the App component with activation button", () => {
  const { getByText } = render(<App />);
  expect(getByText("Activate FRS")).not.toBeNull();
});

test('Activation button changes text "FRS Activated" on click', () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText("Activate FRS"));
  expect(getByText("FRS Activated")).not.toBeNull();
});
