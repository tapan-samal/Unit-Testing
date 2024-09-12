import { render, screen } from "@testing-library/react";
import GetByLabelText from "./getByLabelText";

test("Test getByLabelText for input", () => {
  render(<GetByLabelText />);
  const label = screen.getByLabelText("User Name");
  expect(label).toBeInTheDocument();
  expect(label).toHaveValue("tapan");
});

test("Test getByLabelText for checkbox", () => {
  render(<GetByLabelText />);
  const checkbox = screen.getByLabelText("Skills");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});
