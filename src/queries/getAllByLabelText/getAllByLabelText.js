import React from "react";

const GetAllByLabelText = () => {
  return (
    <div>
      <form method="post">
        <div>
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" defaultValue="tapan" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
      </form>
    </div>
  );
};

export default GetAllByLabelText;
