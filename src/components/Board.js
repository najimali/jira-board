import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { sampleTasks } from "../mocks/sampleTask";
import NewTaskModal from "./NewTaskModal";
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
  const tasks = useSelector((store) => store.tasks.tasks);
  const taskByColumns = tasks.reduce((map, task) => {
    if (!map[task.column]) {
      map[task.column] = [];
    }
    map[task.column].push(task);
    return map;
  }, {});

  return (
    <div className="flex bg-white w-full rounded-lg gap-x-3 min-h-[80vh]">
      {Object.entries(taskByColumns).map(([column, columnTasks]) => (
        <section
          className="flex flex-col bg-gray-100 rounded-lg shadow-lg gap-y-2 overflow-scroll"
          key={column}
        >
          <h2 className="text-center font-semibold text-md text-gray-500 py-2 bg-gray-100 mt-2">
            {column} - {columnTasks.length}
          </h2>
          {columnTasks.map((task) => (
            <TaskCard data={task} key={task.id}></TaskCard>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Board;
