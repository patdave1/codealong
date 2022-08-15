import React from "react";
import {TrashIcon} from "@heroicon/react/outline";

function TaskItem({task, handleDelete}) {
   return ( 
   <div className="flex itmes-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
        <div className="flex-1">{task}</div>
        < div className= "bg-blue-800 p-2 rounded-md" >
            <TrashIcon height={24} color="white" />
        </div>
    </div>
   );
}
export default TaskItem;