import { monthNames } from "./constants";

export const formatDateTo_DD_Month = (dueDate) => {
  const date = new Date(dueDate);
  
  const day = ("0" + date.getUTCDate()).slice(-2);
  const monthIndex = date.getUTCMonth(); // 0-11
  const monthName = monthNames[monthIndex];
  return `${day} ${monthName}`;
};

export const taskComparator = (taskA, taskB) => {
  if (taskA.isFavorited && !taskB.isFavorited) {
    return -1; // Task A comes before Task B
  }
  if (!taskA.isFavorited && taskB.isFavorited) {
    return 1; // Task B comes before Task A
  }
  return taskA.name.localeCompare(taskB.name);
};
