"use client";

import { useState } from "react";

export const Excercise5_todolist = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const HandleOnClick = (event) => {
    setTodos([...todos, inputValue]);
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);

    const handleOnDelete = (event) => {
      const newTodos = todos.filter((el, i) => index !== i);
      setTodos(newTodos);
    };
  };

  return (
    <div>
      {" "}
      <h1 className="text-red-500 font-bold">Exercice 5 - Todo List</h1>
      <input
        type="text"
        placeholder="type...."
        onChange={handleOnChange}
        className="text-black border-1 rounded-1xl"
      ></input>
      <button
        onClick={HandleOnClick}
        className="w-15 h-6 bg-gray-500 rounded-2xl ml-4"
      >
        add
      </button>
      <div className="text-gray-900 flex flex-col gap-1">
        {todos.map((todo, index) => (
          <div key={index} className="flex gap-2">
            {todo}{" "}
            <button
              onClick={() => handleOnDelete(index)}
              className="w-12 h-5 bg-indigo-500 rounded-sm text-gray-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
