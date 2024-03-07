import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faSquareCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { formatDateTo_DD_Month } from "../utils/helper";
import { taskColumnType } from "../utils/constants";

const TaskCard = ({ data }) => {
  const { id, name, dueDate, isFavorited, column } = data;
  return (
    <div className="bg-white w-80 flex flex-col rounded-lg shadow-lg py-4 px-6 min-h-20 border border-gray-200 hover:bg-blue-50 hover:cursor-pointer transition-all duration-200 ease-in-out">
      <p
        className={`text-lg font-medium text-gray-800 break-words ${column === taskColumnType.DONE ? 'line-through text-gray-400' : ''}`}
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
          {`TAS-${id}`}
        </div>
        {isFavorited && (
          <FontAwesomeIcon icon={faStar} style={{ color: "#3ec50d" }} />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
