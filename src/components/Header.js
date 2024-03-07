import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducer/taskSlice";
import NewTaskModal from "./NewTaskModal";
import StatusModal from "./StatusModal";
import { addStatus } from "../reducer/boardSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const handleOpenTaskModal = () => setIsTaskModalOpen(true);
  const handleCloseTaskModal = () => setIsTaskModalOpen(false);

  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const handleOpenStatusModal = () => setIsStatusModalOpen(true);
  const handleCloseStatusModal = () => setIsStatusModalOpen(false);

  const handleSaveTask = (task) => {
    dispatch(addTask(task));
  };
  const handleSaveStatus = (status) => {
    dispatch(addStatus(status));
  };
  return (
    <div className="w-full flex justify-between">
      <button
        className="text-white font-bold bg-blue-600 p-2 rounded-lg"
        onClick={() => handleOpenTaskModal()}
      >
        Create Task
      </button>
      <button
        className="text-white font-bold bg-green-600 p-2 rounded-lg"
        onClick={() => handleOpenStatusModal()}
      >
        Create Status
      </button>
      <NewTaskModal
        isOpen={isTaskModalOpen}
        onClose={handleCloseTaskModal}
        onSave={handleSaveTask}
      />
      <StatusModal
        isOpen={isStatusModalOpen}
        onClose={handleCloseStatusModal}
        onSave={handleSaveStatus}
      />
    </div>
  );
};

export default Header;
