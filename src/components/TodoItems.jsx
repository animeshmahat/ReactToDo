import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDelete, MdOutlineIncompleteCircle } from "react-icons/md";

export default function TodoItems({
  text,
  id,
  isComplete,
  deleteTodo,
  toggle,
}) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <IoCheckmarkDoneCircle
            size={30}
            className="text-green-600 dark:text-green-400 cursor-pointer"
          />
        ) : (
          <MdOutlineIncompleteCircle
            size={30}
            className="text-yellow-600 dark:text-yellow-300 cursor-pointer"
          />
        )}
        <p
          className={`text-slate-700 dark:text-gray-200 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <MdDelete
        size={30}
        className="text-red-600 dark:text-red-400 cursor-pointer"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
}
