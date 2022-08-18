import { TrashIcon } from "@heroicons/react/outline";
import React from "react";

function TaskItem({ task, handleDelete }) {
  return (
    <div className="flex itmes-center justify-between bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
      <div>
        <div className="flex space-x-2"></div>
        <input
          type="checkbox"
          name=""
          id=""
          checked={task.completed}
          onChange={() => {}}
        />
        <div className="flex-1">{task.text}</div>
      </div>

      <button
        className="bg-blue-800 p-2 rounded-md"
        onClick={() => handleDelete(task.id)}
      >
        <TrashIcon height={24} color="white" />
      </button>
    </div>
  );
}
export default TaskItem;
