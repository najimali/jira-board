import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Board = () => {
  const tasks = useSelector((store) => store.taskSlice.tasks);
  const statuses = useSelector((store) => store.boardSlice.statuses);
  const statusTaskMap = tasks.reduce((map, task) => {
    if (!map[task.status]) {
      map[task.status] = [];
    }
    map[task.status].push(task);
    return map;
  }, {});
  const [isStatusSortUpDirection, setIsStatusSortUpDirection] = useState(
    Object.values(statuses).reduce((map, status) => {
      map[`${status}`] = false;
      return map;
    }, {})
  );

  const taskComparator = (taskA, taskB) => {
    if (taskA.isFavorited && !taskB.isFavorited) {
      return -1; // Task A comes before Task B
    }
    if (!taskA.isFavorited && taskB.isFavorited) {
      return 1; // Task B comes before Task A
    }
    return taskA.name.localeCompare(taskB.name);
  };
  return (
    <div className="w-full flex bg-white rounded-lg gap-x-3 min-h-[90vh] overflow-scroll">
      {statuses.map((status) => (
        <section
          className="flex flex-col bg-gray-100 rounded-lg shadow-lg gap-y-2 overflow-scroll min-w-80"
          key={status}
        >
          <div className="flex justify-between items-center px-4 py-2">
            <div className="text-center font-semibold text-md text-gray-500 bg-gray-100 mt-2">
              {status} - {statusTaskMap[`${status}`]?.length || 0}
            </div>
            <div>
              <FontAwesomeIcon
                icon={isStatusSortUpDirection[`${status}`] ? faArrowUp : faArrowDown}
                onClick={(event) => {
                  event.stopPropagation();
                  console.log(isStatusSortUpDirection);
                  setIsStatusSortUpDirection({
                    ...isStatusSortUpDirection,
                    [`${status}`] : !isStatusSortUpDirection[`${status}`]
                  });
                }}
              />
            </div>
          </div>
          {(isStatusSortUpDirection[`${status}`]
            ? statusTaskMap[`${status}`]?.sort(taskComparator)
            : statusTaskMap[`${status}`]
          )?.map((task) => (
            <TaskCard data={task} key={task.id}></TaskCard>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Board;
