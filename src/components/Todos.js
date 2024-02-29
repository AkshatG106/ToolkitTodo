import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
//   const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

//   const handleUpdate = (id, updatedTodo) => {
//     dispatch(updateTodo({ id, updatedTodo }));
//     setEditText("");
//   };
//   const handleEdit = (id, text) => {
//     setEditText(text);
//   };

  return (
    <div>
      <div className="ml-[140px]">
        <h1>My Todos</h1>
      </div>
      {todos.map((todo) => (
        <li key={todo.id} className="ml-[120px] mt-[10px]">
          {todo.text}
          {/* <button onClick={() => handleEdit(todo.id, todo.text)}  className="ml-[20px] bg-gray-600 p-[5px] rounded-[10px]">Edit</button>
          <button
            onClick={() => handleUpdate(todo.id, { ...todo, text: editText })}
            className="ml-[20px] bg-gray-600 p-[5px] rounded-[10px]"
          >
            Update
          </button> */}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="ml-[20px] bg-gray-600 p-[5px] rounded-[10px]"
          >
            Remove
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
