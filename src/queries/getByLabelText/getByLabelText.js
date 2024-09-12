import React from "react";

const GetByLabelText = () => {
  return <div>
    <div>

    <label htmlFor="user-name">User Name</label>
    <input type="text" id="user-name" defaultValue="tapan"/>
    </div>
    <div>
        <label htmlFor="check-box">Skills</label>
        <input type="checkbox"  id="check-box" defaultChecked={true}/>
    </div>
  </div>;
};

export default GetByLabelText;
