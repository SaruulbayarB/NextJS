"use client";

import { useState } from "react";

export const Excercise3_toggle = () => {
  const [states, setStates] = useState([]);

  function HandleOnToggle() {
    setStates(!states);
  }

  return (
    <div>
      <button className="w-10 h-6 bg-amber-300" onClick={HandleOnToggle}>
        Click
      </button>

      {states && <p className="text-black">It is raining</p>}
    </div>
  );
};
