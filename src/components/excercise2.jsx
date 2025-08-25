"use client";

import { useState } from "react";

export const Excercise2 = () => {
  const [states, setStates] = useState([]);

  const HandleOnchange = (event) => {
    setStates(event.target.value);
  };

  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="type...."
        onChange={HandleOnchange}
        className="text-black"
      ></input>
      <p>Input Text: {states} </p>
    </div>
  );
};
