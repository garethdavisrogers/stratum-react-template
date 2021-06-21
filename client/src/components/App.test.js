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

import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Product from './Product';


let container = null;

beforeEach(() => {
	    container = document.createElement('div');
	    document.body.appendChild(container);
});

afterEach(() => {
	    document.body.removeChild(container);
	    container = null;
});

describe(`Testing Product Component`, () => {
	    it('renders without crashing', async () => {
		            act(() => {
				                render(<Product />, container);
				            });

		            let heading = container.querySelector("[data-testid='heading']");
		            expect(heading).toBe(`Old Heading`);

		            const button = container.querySelector('button');

		            await act(async () => {
				                button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
				            });

		            heading = container.querySelector("[data-testid='heading']");
		            expect(heading).toBe(`New Heading`);
		            ReactDOM.unmountComponentAtNode(div);
		        });
});
