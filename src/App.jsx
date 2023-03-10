import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Header from "./components/Header";
import ToDoComputed from "./components/ToDoComputed";
import ToDoCreate from "./components/ToDoCreate";
import ToDoFilter from "./components/ToDoFilter";
import ToDoList from "./components/ToDoList";

const initialStateToDo = JSON.parse(localStorage.getItem("toDos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {
  const [toDos, setToDos] = useState(initialStateToDo);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const createTodo = (title) => {
    const newToDo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setToDos([...toDos, newToDo]);
  };

  const deleteTodo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const updateToDo = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  const computedItemsLeft = toDos.filter((toDo) => !toDo.completed).length;

  const clearCompleted = () => {
    setToDos(toDos.filter((toDo) => !toDo.completed));
  };

  const [filter, setFilter] = useState("all");

  const filteredToDos = () => {
    switch (filter) {
      case "all":
        return toDos;
      case "active":
        return toDos.filter((toDo) => !toDo.completed);
      case "completed":
        return toDos.filter((toDo) => toDo.completed);
      default:
        return toDos;
    }
  };

  const changeFilter = (filter) => setFilter(filter);


  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setToDos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};

  return (
    <div
      className="min-h-screen
    bg-gray-200 
    bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain 
    bg-no-repeat 
    transition-all
    duration-1000 
    dark:bg-slate-900 
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] 
    "
    >
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-lg">
        <ToDoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <ToDoList
            toDos={filteredToDos()}
            deleteTodo={deleteTodo}
            updateToDo={updateToDo}
          />
        </DragDropContext>
        <ToDoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <ToDoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center text-gray-400 dark:text-gray-500">
        Drag and drop to reorder the list
      </footer>
    </div>
  );
};

export default App;
