import React from 'react'
import Header from './Header'
import Board from './Board'

const BoardContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-y-2 w-10/12">
        <Header></Header>
        <Board></Board>
      </div>
  )
}

export default BoardContainer