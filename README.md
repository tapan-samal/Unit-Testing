## Unit Testing Notes
 Unit testing is a software testing method where individual components or functions are tested to ensure the codes are work as expected.
 The goal of unit testing is to validate each unit of the software performs(Like Logic, funtion, API etc).
 Unit test helps to identify and fix the bugs at early stage of development process and improve the code quality and maintainability.

### Type of Testing
 Testing by Tester: Manual Testing and Automatic Testing.
 Testing by Developer: Unit Tesing, Integrated Testing and E-2-E Testing.

### Developer Testing
 Unit Testing: Testing individual units, functions or components(Mostly Used).
 Integrated Testing: Testing between two units or components.
 E-2-E Testing: Test start to end complete project.

### React Testing Tools/Libraries
 Jest Framework: A popular JavaScript testing framework providing a comprehensive testing environment.
 React Testing Library: A lightweight solution for testing React components from the user's perspective, promoting best practices.
 Enzyme: A JavaScript testing utility for React, offering a simple API for rendering and asserting on React components.

### What should we test
 Component rendering testing
 UI element testing
 Functions testing
 API testing
 Event testing
 Props and State
 Conditions testing

### Steps in Testing UI
 Render the component
 Find element and action
 Assertions

### RTL(React Testing Library) Query
 RTL provides various query functions to interact with components and their elements.
 How RTL find elements: By element type, by element name, by element id, by test id, etc.
 Types of RTL query: Find single element(getBy, queryBy, findBy) and Find multiple element(getAllBy, queryAllBy, findAllBy).

### getByRole Query
 getByRole is used to find elements based on their semantic role, like: button, heading, table, input etc.




### Important Points
 react-create-app provide inbuilt jest framework, but in vite we have install separately.
 For testing, create separate file with test.js extension(app.test.js).
 Inside test file, we have to use test method, which take 3 argument(test description, callback function, time delay).
 In callback funtion, first render imported component => find the element/unit in screen => expect the unit in the document.
 Case-insensitive Text: (/....../i).
 We can create group/nested group by describe method: describe("Group 1", () => {...test case...}).
 Skip the specific group: describe.skip
 Test only the specific group: describe.only
 We can not test return value directly in function, so declare in separate component.
 

### File Convention
 file_name.test.js
 file_name.test.jsx
 file_name.spec.js
 file_name.spec.jsx
 __tests__
 __tests__ is folder we create, which allow to create test file inside without test/spec extension. 

### Before/After
 beforeAll(() => {})
 beforeEach(() => {})
 afterAll(() => {})
 afterEach(() => {})
 These methods are used for cleap up functions and to set up or tear down conditions.

### Watch Usage
 Press w to watch all test types.
 Press a to run all tests.
 Press f to run only failed tests.
 Press o to only run tests related to changed files.
 Press q to quit watch mode.
 Press p to filter by a filename regex pattern.
 Press t to filter by a test name regex pattern.
 Press Enter to trigger a test run.

### imporatant Key Words/Methods
 test:
 render:
 screen: 
 expect:
 getByText:
 toBeInTheDocument