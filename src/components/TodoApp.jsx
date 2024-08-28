import React, { useState, useRef } from "react";
import "../App.css";
import TodoBox from "./TodoBox";
import AddTodo from "./AddTodo";

function TodoApp({ className }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editValue, setEditValue] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const focusPoint = useRef(null);

  function handleAddTodo() {
    if (todo.trim() === "") {
      alert("Please enter a value");
      return;
    }
    setTodos([
      ...todos,
      {
        todo: todo,
        date: new Date().toLocaleDateString(),
        isEdited: false,
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      },
    ]);
    setTodo("");
    focusPoint.current.focus();
  }

  function handleUpdateTodo() {
    setTodos(
      todos.map((data) =>
        data.id === editValue.id
          ? { ...data, todo: todo, editeddate: new Date().toLocaleDateString(), isEdited: true }
          : data
      )
    );
    setTodo("");
    setIsEditing(false);
    setEditValue(null);
    focusPoint.current.focus();
  }

  function handlerEdit(id) {
    const todoToEdit = todos.find((data) => data.id === id);
    setIsEditing(true);
    setEditValue(todoToEdit);
    setTodo(todoToEdit.todo);
    focusPoint.current.focus();
  }

  function handlerDlt(id) {
    setTodos(todos.filter((data) => data.id !== id));
  }

  return (
    <>
      <AddTodo
        inputValue={todo}
        onchange={(e) => setTodo(e.target.value)}
        onclick={isEditing ? handleUpdateTodo : handleAddTodo}
        focusPoint={focusPoint}
        addBtn={isEditing ? "Update" : "Add"}
      />
      <div
        className={`overflow-y-scroll m-auto no-scrollbar ${className}`}
        style={{ maxHeight: "80vh" }}
      >
        {todos
          .map((data) => (
            <TodoBox
              todoValue={data.todo}
              onClickEdit={() => handlerEdit(data.id)}
              onClickDlt={() => handlerDlt(data.id)}
              key={data.id}
              className={isEditing && editValue?.id === data.id ? 'bg-red-200' : 'bg-gray-200'}
            />
          ))
          .reverse()}
      </div>
    </>
  );
}

export default TodoApp;
