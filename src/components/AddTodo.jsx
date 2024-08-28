import React from "react";

function AddTodo({ focusPoint, inputValue, onchange, onclick, addBtn }) {
  return (
    <div className="flex flex-row items-center bg-gray-900 lg:w-1/2 md:w-2/3 sm:w-full mx-auto p-4 my-2 gap-4 rounded-lg shadow-lg bg-opacity-90 transition-shadow duration-300 ease-in-out">
      <input
        ref={focusPoint}
        value={inputValue}
        onChange={onchange}
        type="text"
        name="todo"
        id="todoInput"
        className="text-lg text-white p-3 bg-gray-800 border border-gray-600 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out"
        placeholder="Add a new task..."
      />
      <button
        onClick={onclick}
        className="bg-blue-600 text-white text-lg px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out"
      >
        {addBtn}
      </button>
    </div>
  );
}

export default AddTodo;
