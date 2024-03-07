import React, { useState } from "react";

const StatusModal = ({ isOpen, onClose, onSave }) => {
  const [status, setStatus] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(status);
    onClose(event);
    setStatus("")
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-[50vh] min-w-96">
        <h2 className="text-lg font-bold mb-4">Add New Status</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block">Status</label>
            <input
              className="border p-2 w-full"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
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

export default StatusModal;
