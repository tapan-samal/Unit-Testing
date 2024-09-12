import { fireEvent, render, screen } from "@testing-library/react";
import Initial from "./Initial";
import handleBtnClick2 from "./helper";

// beforeAll(() => {
//   console.log("____Before all____");
// });

// beforeEach(() => {
//   console.log("____Befofe each_____");
// });

describe.skip("Group 1", () => {
  test("React text test", () => {
    render(<Initial />);
    const text = screen.getByText("React First Test Case!");
    expect(text).toBeInTheDocument();
  });

  test("React case-insensitive test", () => {
    render(<Initial />);
    const text = screen.getByText(/React first test case!/i);
    expect(text).toBeInTheDocument();
  });
});

// afterAll(() => {
//   console.log("After all");
// });

// afterEach(() => {
//   console.log("After each");
// });

test.skip("React image test", () => {
  render(<Initial />);
  let alt = screen.getByAltText("testing-img");
  let title = screen.getByTitle("AI-Img");
  expect(alt).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test.skip("Input element test", () => {
  render(<Initial />);
  let inputElement = screen.getByRole("textbox");
  let inputPlaceholder = screen.getByPlaceholderText(/user name/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue("tapan");
  expect(inputPlaceholder).toBeInTheDocument();
  expect(inputPlaceholder).toHaveAttribute("name", "username");
  expect(inputPlaceholder).toHaveAttribute("id", "userId");
  expect(inputPlaceholder).toHaveAttribute("type", "text");

  //On change event
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");
});

test.skip("Button click test case", () => {
  render(<Initial />);
  let btn = screen.getByTestId("bttn");
  fireEvent.click(btn);
  expect(btn).toBeInTheDocument();
  expect(screen.getByText("Data Updated!")).toBeInTheDocument();
});

describe.skip("Methods Testing", () => {
  test("Testing button 1", () => {
    render(<Initial />);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Botton One!")).toBeInTheDocument();
  });

  test.skip("Testing button 2", () => {
    expect(handleBtnClick2()).toMatch("Botton Two!");
  });
});
