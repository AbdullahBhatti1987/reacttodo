import React from "react";

function TodoBox({ className, todoValue, onClickEdit, onClickDlt, isEditing }) {
  return (
    <div
      className={`flex flex-row items-center ${isEditing ? 'bg-red-600' : 'bg-gray-800'} shadow-md rounded-lg p-4 my-2 gap-4 hover:shadow-lg transition-shadow duration-300 ease-in-out ${className} lg:w-1/2  m-auto`}
    >
      <h1 className="text-lg text-white w-full">{todoValue}</h1>
      <div className="flex gap-2">
        <button
          onClick={onClickEdit}
          className="bg-blue-600 text-white text-lg px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out"
        >
          Edit
        </button>
        <button
          onClick={onClickDlt}
          className="bg-red-600 text-white text-lg px-4 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoBox;
