import React, { useState } from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "./TaskCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { taskComparator } from "../utils/helper";
import { useDrop } from 'react-dnd';

const BoardSection = ({ status, tasks, onDropTask }) => {
  const [isStatusSortUpDirection, setIsStatusSortUpDirection] = useState(false);
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TASK_CARD",
    drop: (item, monitor) => onDropTask(item, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <section
      ref={dropRef}
      className="flex flex-col bg-gray-100 rounded-lg shadow-lg gap-y-2 overflow-scroll min-w-80"
      key={status}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-center font-semibold text-md text-gray-500 bg-gray-100 mt-2">
          {status} - {tasks?.length || 0}
        </div>
        <div>
          <FontAwesomeIcon
            icon={isStatusSortUpDirection ? faArrowUp : faArrowDown}
            onClick={(event) => {
              event.stopPropagation();
              setIsStatusSortUpDirection(!isStatusSortUpDirection);
            }}
          />
        </div>
      </div>
      {(isStatusSortUpDirection ? tasks?.sort(taskComparator) : tasks)?.map(
        (task) => (
          <TaskCard data={task} key={task.id}></TaskCard>
        )
      )}
    </section>
  );
};

export default BoardSection;
