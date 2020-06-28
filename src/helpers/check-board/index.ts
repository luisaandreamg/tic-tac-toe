import { checkWin } from 'helpers'
import { BLOCK } from 'App'

interface Input {
  newBoard: BLOCK[]
  isXTurn: boolean
  turnNumber: number
}
type CheckBoardOutput =
  | 'Gana el jugador X'
  | 'Gana el jugador O'
  | 'Gato'
  | 'Ninguno'

export default function checkBoard({
  isXTurn,
  turnNumber,
  newBoard,
}: Input): CheckBoardOutput {
  if (turnNumber >= 5) {
    if (isXTurn && checkWin(newBoard, 'x')) return 'Gana el jugador X'
    if (!isXTurn && checkWin(newBoard, 'o')) return 'Gana el jugador O'
    if (turnNumber === 9) return 'Gato'
  }

  return 'Ninguno'
}
