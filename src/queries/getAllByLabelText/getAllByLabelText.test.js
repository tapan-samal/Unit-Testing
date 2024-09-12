import { render, screen } from "@testing-library/react";
import GetAllByLabelText from "./getAllByLabelText";

test("Test getByAllLabelText", () => {
  render(<GetAllByLabelText />);
  const inputs = screen.getAllByLabelText("User Name");

  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue("tapan");
  }
});
