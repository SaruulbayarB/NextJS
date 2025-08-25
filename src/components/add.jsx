"use client";

import { useState } from "react";

export const Add = () => {
  const [tasks, setTasks] = useState([]);

  const handleOnClick = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, { title: inputValue, isCompleted: true }]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex">
        <input
          className="w-[280px] h-[40px] pl-2 rounded-md bg-white border border-[#E4E4E7] text-[#71717A]"
          placeholder="Add a new task..."
        />

        <button
          onClick={handleOnClick}
          className="w-[59px] h-[40px] bg-blue-500 rounded-md text-sm font-normal text-white ml-3"
        >
          Add
        </button>
      </div>

      {/* Render tasks */}
      <ul className="">
        {tasks.map((task, index) => (
          <li key={index} className="text-gray-700">
            return tasks
          </li>
        ))}
      </ul>
    </div>
  );
};
