import { render, screen } from "@testing-library/react";
import GetAllByRole from "./getAllByRole";

test("Test getAllByRole", () => {
  render(<GetAllByRole />);
  const btns = screen.getAllByRole("button");
  //   expect(btns[0]).toBeInTheDocument();

  for (let i = 0; i < btns.length; i++) {
    expect(btns[i]).toBeInTheDocument();
  }

  const options = screen.getAllByRole("option");

  for(let i = 0; i < options.length; i++) {
    expect(options[i]).toBeInTheDocument();
  }
});
