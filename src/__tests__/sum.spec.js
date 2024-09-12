import { render } from "@testing-library/react";
import Sum from "../Sum";

//JavaScript Testing
describe.skip("Test group", () => {
  test("Testing sum function", () => {
    let a = 10,
      b = 30,
      output = 40;
    expect(Sum(a, b)).toBe(output);
  });

  test("Create snapshoot", () => {
    const container = render(<Sum />);
    expect(container).toMatchSnapshot();
  });
});
