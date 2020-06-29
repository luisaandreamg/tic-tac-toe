import { BLOCK, SYMBOL } from 'typings'
import checkBoard from './check-board'

interface Input {
  board: BLOCK[] //ok
  boardIndex: number //ok
  playerTurn: SYMBOL //ok
  turnNumber: number //ok
}

interface Output {
  newBoard: BLOCK[] //ok
  newMessage: string //ok
  newIsGameDone: boolean //ok
  newPlayerTurn: SYMBOL //ok
  newTurnNumber: number //ok
}

export default function getUpdatedGameState({
  board, //ok
  boardIndex, //ok
  playerTurn, //ok
  turnNumber, //ok
}: Input): Output {
  const newBoard = [...board] //ok
  newBoard[boardIndex] = playerTurn //ok
  const outcome = checkBoard({ newBoard, playerTurn, turnNumber }) //ok

  let newMessage = '' //ok
  let newIsGameDone = false //ok

  switch (outcome) {
    case 'Gana el jugador X': {
      //ok
      newMessage = 'El jugador X gana!' //ok
      newIsGameDone = true
      break
    }
    case 'Gana el jugador O': {
      //ok
      newMessage = 'El jugador O gana!' //ok
      newIsGameDone = true
      break
    }
    case 'Gato': {
      //ok
      newMessage = 'Gato!' //ok
      newIsGameDone = true
      break
    }
    case 'Ninguno': //ok
    default:
      //ok
      newMessage = `Es el turno del jugador ${playerTurn === 'X' ? 'O' : 'X'}` //ok
  }

  return {
    newBoard, //ok
    newMessage, //ok
    newIsGameDone, //ok
    newPlayerTurn: playerTurn === 'X' ? 'O' : 'X', //ok
    newTurnNumber: turnNumber + 1, //ok
  }
}
