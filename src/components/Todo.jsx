import { FcTodoList } from "react-icons/fc";
import ThemeToggle from "./ThemeToggle";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : ""
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white dark:bg-black w-[95%] sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-auto flex flex-col p-6 sm:p-8 min-h-[550px] rounded-xl transition-colors duration-300 ease-in-out">
      {/* title */}
      <div className="flex items-center mt-4 sm:mt-7 gap-2 text-black dark:text-white">
        <FcTodoList size={33} />
        <h1 className="text-2xl sm:text-3xl font-semibold ml-2">ToDo List</h1>
        <span className="ml-auto">
          <ThemeToggle />
        </span>
      </div>

      {/* input box */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 my-6 sm:my-7">
        <div className="flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a Task"
            className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-full bg-gray-200 dark:bg-gray-800 placeholder:text-slate-600 dark:placeholder:text-gray-400 text-black dark:text-white outline-none"
          />
        </div>
        <button
          onClick={add}
          className="mt-2 sm:mt-0 sm:ml-3 h-12 sm:h-14 w-full sm:w-32 rounded-full bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-400 text-white text-lg font-medium transition-colors duration-200"
        >
          Add +
        </button>
      </div>

      {/* ToDo List */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}
