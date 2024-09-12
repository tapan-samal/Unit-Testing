import Users from "./ClassComp";
import renderer from "react-test-renderer";

test.skip("Test case for class component", () => {
  const data = renderer.create(<Users />).getInstance();
  const name = "tapan kumar";
  expect(data.getUserName()).toMatch(name + "samal");
});
