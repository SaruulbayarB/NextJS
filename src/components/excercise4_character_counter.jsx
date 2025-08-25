"use client";

import { useState } from "react";

export const Excercise4_character_counter = () => {
  const [states, setStates] = useState([]);

  const HandleOnchange = (event) => {
    setStates(event.target.value);
  };

  return (
    <div>
      {" "}
      <h1 className="text-indigo-600 font-bold">
        Exercice 4 - Counting the character
      </h1>
      <input
        type="text"
        placeholder="type...."
        onChange={HandleOnchange}
        className="text-black"
      ></input>
      <p>Character No: {states.length} </p>
    </div>
  );
};
