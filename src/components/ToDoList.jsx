import { Droppable, Draggable } from "@hello-pangea/dnd";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, deleteTodo, updateToDo }) => {
  return (
    <Droppable droppableId="toDos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="overflow-hidden rounded-t-md bg-white dark:bg-slate-800"
        >
          {toDos.map((toDo, index) => (
            <Draggable key={toDo.id} index={index} draggableId={`${toDo.id}`}>
              {(draggableProvided) => (
                <ToDoItem
                  toDo={toDo}
                  deleteTodo={deleteTodo}
                  updateToDo={updateToDo}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ToDoList;
