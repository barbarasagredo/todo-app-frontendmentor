const ToDoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex items-center justify-between rounded-b-md  dark:bg-slate-800 bg-white px-4 py-2 text-gray-400">
      <span className="text-gray-500">{computedItemsLeft} items left</span>
      <button onClick={clearCompleted}>Clear completed</button>
    </section>
  );
};

export default ToDoComputed;
