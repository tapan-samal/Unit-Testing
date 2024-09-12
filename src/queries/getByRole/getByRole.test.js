import { render, screen } from "@testing-library/react"
import GetByRole from "./getByRole";

test("Test getByRole", () => {
    render(<GetByRole />);
    // const inputElement = screen.getByRole("textbox");
    // expect(inputElement).toBeInTheDocument();
    // expect(inputElement).toHaveValue("React")
    // expect(inputElement).toBeDisabled();

    const bttn1 = screen.getByRole("button", {name: "Click_1"});
    const bttn2 = screen.getByRole("button", {name: "Click_2"});
    expect(bttn1).toBeInTheDocument()
    expect(bttn2).toBeInTheDocument()

    const input1 = screen.getByRole("textbox", {name:'User Name'})
    const input2 = screen.getByRole("textbox", {name:'User Email'})
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();

    const div = screen.getByRole("dummy");
    expect(div).toBeInTheDocument();
})