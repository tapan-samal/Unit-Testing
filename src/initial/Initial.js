import React, { useState } from "react";
import handleBtnClick2 from "./helper";

const Initial = () => {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  const handleBtnClick1 = () => {
    setValue("Botton One!");
  };
  
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Unit Testing : Jest</h1>
      {/* Sensitive/Insensitive test case */}
      <p>React First Test Case!</p>
      <br />
      <br />
      {/* Image test case */}
      <img
        src="https://www.pexels.com/photo/cars-parked-on-street-in-town-21939604/"
        alt="testing-img"
        title="AI-Img"
      />
      <br />
      <br />
      {/* Input element & onChange test case */}
      <input
        type="text"
        name="username"
        placeholder="User Name"
        id="userId"
        // value={inputData}
        defaultValue={"tapan"}
        onChange={(e) => setInputData(e.target.value)}
      />
      <br />
      <br />
      {/* Button and onClick test case */}
      <button data-testid="bttn" onClick={(e) => setData("Data Updated!")}>Button</button>
      <h2>{data}</h2>
      <br />
      <br />
      {/* Method Testing */}
      <button data-testid="btn1" onClick={handleBtnClick1}>
        Botton 1
      </button>{" "}
      &nbsp;
      <button  onClick={handleBtnClick2}>
        Botton 2
      </button>
      <h2>{value}</h2>
    </>
  );
};

export default Initial;
