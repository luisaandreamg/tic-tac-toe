import { useState } from 'react' //ok
import { useParams } from 'react-router-dom' //ok

import { db } from 'services' //ok
import { SYMBOL } from 'typings' //ok

interface Output {
  //ok
  clearBoard: (startingTurn: SYMBOL) => void //ok
  isClearing: boolean //ok
}

const useClearBoard = (): Output => {
  //ok
  const { roomId } = useParams() //ok
  const [isClearing, setIsClearing] = useState(false)

  async function clearBoard(startingTurn: SYMBOL) {
    //ok
    setIsClearing(true) //ok
    try {
      //ok
      const newStartingTurn = startingTurn === 'X' ? 'O' : 'X' //ok
      await db //ok
        .collection('rooms') //ok
        .doc(roomId) //ok
        .update({
          //ok
          board: [null, null, null, null, null, null, null, null, null], //ok
          isGameDone: false, //ok
          message: `Es el turno del jugador ${newStartingTurn}`, //ok
          playerTurn: newStartingTurn, //ok
          startingTurn: newStartingTurn, //ok
          turnNumber: 1, //ok
        })
    } catch (err) {
      //ok
      console.error(err) //ok
    } finally {
      setIsClearing(false)
    }
  }

  return { clearBoard, isClearing } //ok
}

export default useClearBoard //ok
