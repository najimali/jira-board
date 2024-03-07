import React, { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducer/taskSlice";
import NewTaskModal from "./NewTaskModal";

const Header = () => {
  const dispatch = useDispatch((store) => store.tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveTask = (newTask) => {
    dispatch(addTask(newTask));
  };
  return (
    <div className="w-full flex justify-start">
      <button
        className="text-white font-bold bg-blue-600 p-2 rounded-lg"
        onClick={() => handleOpenModal()}
      >
        Create
      </button>
      <NewTaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default Header;
