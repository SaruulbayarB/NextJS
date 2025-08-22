"use client";

import { useState } from "react";

export const Add = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, { title: inputValue, isCompleted: true }]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex">
        <input
          value={inputValue}
          className="w-[280px] h-[40px] pl-2 rounded-md bg-white border border-[#E4E4E7] text-[#71717A]"
          placeholder="Add a new task..."
          onChange={handleOnChange}
        />

        <button
          onClick={handleOnClick}
          className="w-[59px] h-[40px] bg-blue-500 rounded-md text-sm font-normal text-white ml-3"
        >
          Add
        </button>
      </div>

      {/* Render tasks */}
      <ul className="space-y-1">
        {tasks.map((task, index) => (
          <li key={index} className="text-gray-700">
            {task.title} {task.isCompleted ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
