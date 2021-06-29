import { render } from "@testing-library/react";
import Register from "./Register";

describe("Register Component", () => {
  it('changes state on typing in field with corresponding label name', async()=>{
    const {getByRole} = render(<Register/>);
    
  });
});
