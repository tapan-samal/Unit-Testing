import React from "react";

const GetByRole = () => {
  return (
    <>
      <h2>1. getByRole</h2>
      {/* <input type="text" defaultValue="React" disabled /> */}
      <button>Click_1</button>
      <button>Click_2</button>

      <label htmlFor="input1">User Name</label>
      <input type="text" name="" id="input1" />
      <label htmlFor="input2">User Email</label>
      <input type="text" name="" id="input2" />

      {/* Non-sementic */}
    <div role="dummy">This is a div</div>
    </>
  );
};

export default GetByRole;
