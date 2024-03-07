import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const Board = () => {
  const tasks = useSelector((store) => store.taskSlice.tasks);
  const statusTaskMap = tasks.reduce((map, task) => {
    if (!map[task.status]) {
      map[task.status] = [];
    }
    map[task.status].push(task);
    return map;
  }, {});

  return (
    <div className="flex bg-white w-full rounded-lg gap-x-3 min-h-[80vh]">
      {Object.entries(statusTaskMap).map(([status, statusTasks]) => (
        <section
          className="flex flex-col bg-gray-100 rounded-lg shadow-lg gap-y-2 overflow-scroll"
          key={status}
        >
          <h2 className="text-center font-semibold text-md text-gray-500 py-2 bg-gray-100 mt-2">
            {status} - {statusTasks.length}
          </h2>
          {statusTasks.map((task) => (
            <TaskCard data={task} key={task.id}></TaskCard>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Board;
