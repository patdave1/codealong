import React, {usestate, useEffect} from "react";

import{v4 as uuid } from "uuid";
import React,{usestate} from "react";
import TaskItem from "./TaskItem";

function TaskManager() {
const [tasks, SetTask] = usestate(() => {
const input = localStorage.getItem("tasks");
if (!tasks) return [];
});

const handleSubmit = (e) => {
    e.preventDefault();
if ("input === ") return;

const newTask = {
  id: uuid(),
  text: input,
  completed: false

};
SetTask([newTask, ...tasks]);
SetInput("")
};
  const handleDelete = (id) => {
const newTask = tasks.filter((task) => task.id === id);
SetTask(newTask);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])



    return (
        <div className="h-screen bg-blue-600 justify-center items-center">
        <div className="max-w-xl bg-white rounded-xl px-5 py-10">
        <form 
            onSubmit={handleSubmit}
        className="space-x-5 w-full flex w[30rem] mb-10 justify-between">
            <input  type="text" 
            className="border-2 border-blue-400 p-2 rounded-md outline-name w-10/12"
            onChange={(e) => SetInput(e.target.value)} 
            value={input}
          
            />
           <button type="submit"className="border-2 bg-blue-600  text-white text text-lg py-2 px-7 rounded-md">Add</button>
           disable={input === ""}
           </form>

            <div className="space-y-2 overflow-y-auto h-56">
               {tasks.map((task) => 
               <TaskItem key={task.id} task={task} handleDelete={handleDelete} /> )}
                        
                   
               
                </div>
                </div>
                </div>

    );

}
export default TaskManager;