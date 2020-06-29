import checkWin from './check-win'
import { SYMBOL } from 'typings'

interface Input {
  newBoard: any[]
  playerTurn: SYMBOL
  turnNumber: number
}
type CheckBoardOutput =
  | 'Gana el jugador X'
  | 'Gana el jugador O'
  | 'Gato'
  | 'Ninguno'

export default function checkBoard({
  playerTurn,
  turnNumber,
  newBoard,
}: Input): CheckBoardOutput {
  if (turnNumber >= 5) {
    if (playerTurn === 'X' && checkWin(newBoard, 'X'))
      return 'Gana el jugador X'
    if (playerTurn === 'O' && checkWin(newBoard, 'O'))
      return 'Gana el jugador O'
    if (turnNumber === 9) return 'Gato'
  }

  return 'Ninguno'
}
