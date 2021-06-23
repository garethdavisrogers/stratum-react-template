import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import App from "./App";

test("renders the App component with activation button", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Activate FRS/i)).not.toBeNull();
});

test('Activation button changes text "FRS Activated" on click', () => {
  const { getByText } = render(<App />);
  userEvent.click(getByText(/Activate FRS/i));
  expect(
    getByText(
      /FRS Activated, authorities notified. Please pick the option or options that best describe the situation:/i
    )
  ).not.toBeNull();
});

// let container = null;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// describe(`Testing Product Component`, () => {
//   it("renders without crashing", async () => {
//     act(() => {
//       render(<Product />, container);
//     });

//     let heading = container.querySelector("[data-testid='heading']");
//     expect(heading).toBe(`Old Heading`);

//     const button = container.querySelector("button");

//     await act(async () => {
//       button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     });

//     heading = container.querySelector("[data-testid='heading']");
//     expect(heading).toBe(`New Heading`);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });

// describe('<Controls />', () => {
// 	it('renders without crashing', () => {
// 			render(<Controls/>);
// 	});
// 	it('activate FRS', () => {

// 			const {getByText} = render(<Controls />);

// 			userEvent.click(getByText(/activate FRS/i));
// 			expect(getByText("FRS Activated")).not.toBeNull();
// 	});

// });
