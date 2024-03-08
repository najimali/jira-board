import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSquareCheck,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { formatDateTo_DD_Month } from "../utils/helper";
import { taskStatusType } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../reducer/taskSlice";
import NewTaskModal from "./NewTaskModal";
import { useDrag } from 'react-dnd';
const TaskCard = ({ data }) => {
  const { id, name, dueDate, isFavorited, status } = data;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };
  const handleSaveTask = (newTask) => {
    dispatch(updateTask(newTask));
  };

  const handleDeleteTask = (event) => {
    event.stopPropagation();
    dispatch(deleteTask(id))
  }

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK_CARD",
    item: { id: data.id, status: data.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={dragRef}
      className="bg-white w-80 flex flex-col rounded-lg shadow-lg py-4 px-6 min-h-20 border border-gray-200 hover:bg-blue-50 hover:cursor-pointer transition-all duration-200 ease-in-out"
      onClick={() => handleOpenModal()}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <NewTaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        existingTaskId={id}
      />
      <NewTaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        existingTaskId={id}
      />
      <p
        className={`text-lg font-medium break-words ${
          status === taskStatusType.DONE
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {name}
      </p>
      {dueDate ? (
        <div className="mt-2 text-xs text-red-500 font-semibold bg-red-200 max-w-16 rounded-sm pl-1">
          <FontAwesomeIcon icon={faCalendarDays} />{" "}
          {formatDateTo_DD_Month(dueDate)}
        </div>
      ) : null}

      <div className="mt-2 text-xs text-gray-700 font-semibold flex justify-between items-center">
        <div>
          <FontAwesomeIcon
            className="mr-1 text-blue-600"
            icon={faSquareCheck}
          ></FontAwesomeIcon>
          {`${id}`}
        </div>
        <div>
          {isFavorited && (
            <FontAwesomeIcon icon={faStar} style={{ color: "#3ec50d" }} />
          )}
          <FontAwesomeIcon icon={faTrash} size="sm" className="ml-2"
          onClick={(event) => handleDeleteTask(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
