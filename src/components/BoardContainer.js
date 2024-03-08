import React from "react";
import Header from "./Header";
import Board from "./Board";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const BoardContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-y-2 w-10/12">
      <Header></Header>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </div>
  );
};

export default BoardContainer;
