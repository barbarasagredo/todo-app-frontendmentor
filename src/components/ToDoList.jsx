import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, deleteTodo, updateToDo }) => {
  return (
    <div className="rounded-t-md overflow-hidden dark:bg-slate-800 bg-white">
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          deleteTodo={deleteTodo}
          updateToDo={updateToDo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
