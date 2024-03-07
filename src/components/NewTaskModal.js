import React, { useId, useState } from "react";
import { taskColumnType } from "../utils/constants";
import { useSelector } from "react-redux";

// NewTaskModal component
const NewTaskModal = ({ isOpen, onClose, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isFavorited, setIsFavorited] = useState(false);
  const [column, setColumn] = useState(taskColumnType.TODO);
  const taskLength = useSelector((store) => store.tasks.tasks.length);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskLength + 1,
      name: taskName,
      description: taskDescription,
      dueDate,
      isFavorited,
      column: column,
    };
    onSave(newTask);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-[50vh]">
        <h2 className="text-lg font-bold mb-4">Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block">Name</label>
            <input
              className="border p-2 w-full"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block">Description</label>
            <textarea
              className="border p-2 w-full"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block">Status</label>
            <select
              className="border p-2 w-full"
              value={column}
              onChange={(e) => setColumn(e.target.value)}
              defaultValue={taskColumnType.TODO}
            >
              {Object.entries(taskColumnType).map(([_, columnType]) => (
                <option key={columnType} value={columnType}>
                  {columnType}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="block">Due Date</label>
            <input
              type="date"
              className="border p-2 w-full"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>
              <input
                type="checkbox"
                checked={isFavorited}
                onChange={(e) => setIsFavorited(e.target.checked)}
              />{" "}
              Is Favorited?
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 p-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTaskModal;
