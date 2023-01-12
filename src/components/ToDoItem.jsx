import React from "react";
import IconCheck from "./icons/IconCheck";
import IconXmark from "./icons/IconXmark";

const ToDoItem = React.forwardRef(
  ({ toDo, deleteTodo, updateToDo, ...props }, ref) => {
    const { id, title, completed } = toDo;
    return (
      <article
        ref={ref}
        {...props}
        className="flex items-center gap-4 border-b border-b-gray-400 px-4 py-2 dark:border-gray-700 dark:bg-slate-800"
      >
        <button
          onClick={() => updateToDo(id)}
          className={`h-4 w-4 flex-none rounded-full dark:border-gray-700  ${
            completed
              ? "border-1 grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300"
              : "inline-block border-2"
          }`}
        >
          {completed && <IconCheck />}
        </button>
        <p className={`grow text-gray-500 ${completed && "line-through"}`}>
          {title}
        </p>
        <button onClick={() => deleteTodo(id)} className="flex-none ">
          <IconXmark className="stroke-slate-600 dark:stroke-slate-600" />
        </button>
      </article>
    );
  }
);

export default ToDoItem;
