import { useDispatch, useSelector } from "react-redux";
import BoardSection from "./BoardSection";
import { updateTaskStatus } from "../reducer/taskSlice";

const Board = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((store) => store.taskSlice.tasks);
  const statuses = useSelector((store) => store.boardSlice.statuses);
  const statusTaskMap = tasks.reduce((map, task) => {
    if (!map[task.status]) {
      map[task.status] = [];
    }
    map[task.status].push(task);
    return map;
  }, {});
  const onDropTask = (draggedItem, newStatus) => {
    dispatch(updateTaskStatus({ id: draggedItem.id, status: newStatus }));
  };
  return (
    <div className="w-full flex bg-white rounded-lg gap-x-3 min-h-[90vh] overflow-scroll">
      {statuses.map((status) => (
        <BoardSection
          status={status}
          tasks={statusTaskMap[`${status}`]}
          onDropTask={(draggedItem, newStatus) => onDropTask(draggedItem, newStatus)}
        ></BoardSection>
      ))}
    </div>
  );
};

export default Board;
