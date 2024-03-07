import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSquareCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
function formatDate(dueDate) {
  const date = new Date(dueDate);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = ("0" + date.getUTCDate()).slice(-2);
  const monthIndex = date.getUTCMonth(); // 0-11
  const monthName = monthNames[monthIndex];
  return `${day} ${monthName}`;
}

const TaskCard = ({ data }) => {
  const { id, name, dueDate, isFavorited } = data;
  return (
    <div className="bg-white w-80 flex flex-col rounded-lg shadow-lg py-4 px-6 min-h-20 border border-gray-200 hover:bg-gray-100 hover:cursor-pointer transition-all duration-200 ease-in-out"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        {isFavorited && (
          <FontAwesomeIcon icon={faStar} style={{ color: "#3ec50d" }} />
        )}
      </div>
      {dueDate ? (
        <div className="mt-2 text-xs  text-red-500 font-semibold bg-red-200 max-w-16 rounded-sm pl-1">
          <FontAwesomeIcon icon={faCalendarDays} /> {formatDate(dueDate)}
        </div>
      ) : null}

      <div className="mt-2 text-xs  text-gray-700 font-semibold ">
        <FontAwesomeIcon className="mr-1 text-blue-600" icon={faSquareCheck} />
        {`TAS-${id}`}
      </div>
    </div>
  );
};

export default TaskCard;
