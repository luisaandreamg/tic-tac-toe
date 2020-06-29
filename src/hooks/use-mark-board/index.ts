import { useState } from 'react' //ok
import { useParams } from 'react-router-dom' //ok

import { db } from 'services' //ok
import { Room } from 'typings' //ok

import { getUpdatedGameState } from './helpers' //ok

interface Output {
  //ok
  isMarking: boolean //ok
  markBoard: (boardIndex: number, room: Room) => void //ok
}

const useMarkBoard = (): Output => {
  //ok
  const { roomId } = useParams() //ok
  const [isMarking, setIsMarking] = useState<boolean>(false) //ok

  async function markBoard(boardIndex: number, room: Room) {
    //ok
    setIsMarking(true) //ok
    try {
      const { board, playerTurn, turnNumber } = room //ok
      const {
        //ok
        newBoard, //ok
        newIsGameDone, //ok
        newMessage, //ok
        newPlayerTurn, //ok
        newTurnNumber, //ok
      } = getUpdatedGameState({ board, boardIndex, playerTurn, turnNumber }) //ok
      await db.collection('rooms').doc(roomId).update({
        //ok
        board: newBoard, //ok
        isGameDone: newIsGameDone, //ok
        message: newMessage, //ok
        playerTurn: newPlayerTurn, //ok
        turnNumber: newTurnNumber, //ok
      })
    } catch (err) {
      //ok
      console.error(err) //ok
    }
    setIsMarking(false) //ok
  }

  return { isMarking, markBoard } //ok
}

export default useMarkBoard //ok
