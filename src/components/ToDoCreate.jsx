import { useState } from "react";

const ToDoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitTodoCreated = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitTodoCreated}
      className="my-6 flex items-center gap-4 overflow-hidden rounded-md bg-white  dark:bg-slate-800 px-3 py-3"
    >
      <span className="inline-block h-4 w-4 rounded-full border-2  dark:border-gray-700 " />
      <input
        className="w-full text-sm text-gray-500 outline-none bg-transparent"
        type="text"
        placeholder="Add element"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default ToDoCreate;
