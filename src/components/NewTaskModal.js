import React, { useEffect, useState } from "react";
import { prefixes, taskStatusType } from "../utils/constants";
import { useSelector } from "react-redux";
const defaultTask = {
  id : '',
  name : '',
  description : '',
  dueDate : '',
  isFavorited : false,
  status : taskStatusType.TODO
}
const NewTaskModal = ({ isOpen, onClose, onSave , existingTaskId = ''}) => {
  const [task, setTask] = useState(defaultTask)
  const existingTasks = useSelector(store => store.taskSlice.tasks)
  const totalTask = existingTasks.length
  useEffect(() => {
    if(existingTaskId){
      const existingTask = existingTasks.find(
        ({ id }) => id === existingTaskId
      );
      setTask(existingTask)
    }
  },[isOpen])
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({
      ...task,
      id:  existingTaskId ? existingTaskId : `${prefixes.NEW_TASK}${totalTask + 1}`,
    });
    setTask(defaultTask)
    onClose(event);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-[50vh] min-w-96">
        <h2 className="text-lg font-bold mb-4">{existingTaskId ? existingTaskId : `Create New Task`}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block">Name</label>
            <input
              className="border p-2 w-full"
              value={task.name}
              onChange={(e) => setTask({ ...task, name : e.target.value})}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block">Description</label>
            <textarea
              className="border p-2 w-full"
              value={task.description}
              onChange={(e) => setTask({ ...task, description : e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label className="block">Status</label>
            <select
              className="border p-2 w-full"
              value={task.status}
              onChange={(e) => setTask({ ...task, status : e.target.value})}
            >
              {Object.entries(taskStatusType).map(([_, statusType]) => (
                <option key={statusType} value={statusType}>
                  {statusType}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="block">Due Date</label>
            <input
              type="date"
              className="border p-2 w-full"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate : e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label>
              <input
                type="checkbox"
                checked={task.isFavorited}
                onChange={(e) => setTask({ ...task, isFavorited : e.target.checked})}
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
