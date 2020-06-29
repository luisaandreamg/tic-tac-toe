import React, { useState } from 'react'

import { Button, Container, Row, Block } from 'styles'
import { useMarkBoard, useRoom } from 'hooks'

export type SYMBOL = 'x' | 'o'
export type BLOCK = SYMBOL | '-'

const Room = () => {
  const { isMarking, markBoard } = useMarkBoard()
  const { isFetching, room } = useRoom()

  if (isFetching) return <h1>Cargando Sala...</h1>
  if (!room) return <h1>La sala no fue encontrada</h1>

  const { board, isGameDone, message } = room

  function handleClick(index: number) {
    if (!isMarking && !board[index] && !isGameDone) markBoard(index, room!)
  }

  function handleClear() {
    /*setStartingTurn(startingTurn === 'x' ? 'o' : 'x')
    setIsXTurn(startingTurn === 'x')
    setMessage(`Es el turno del jugador ${startingTurn.toUpperCase()}`)
    setBoard(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
    setGameDone(false)
    setTurnNumber(1)*/
  }

  return (
    <Container>
      <h3>{message}</h3>
      <Row>
        <Block onClick={() => handleClick(0)}>
          {isMarking ? '-' : board[0]}
        </Block>
        <Block onClick={() => handleClick(1)}>
          {isMarking ? '-' : board[1]}
        </Block>
        <Block onClick={() => handleClick(2)}>
          {isMarking ? '-' : board[2]}
        </Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(3)}>
          {isMarking ? '-' : board[3]}
        </Block>
        <Block onClick={() => handleClick(4)}>
          {isMarking ? '-' : board[4]}
        </Block>
        <Block onClick={() => handleClick(5)}>
          {isMarking ? '-' : board[5]}
        </Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(6)}>
          {isMarking ? '-' : board[6]}
        </Block>
        <Block onClick={() => handleClick(7)}>
          {isMarking ? '-' : board[7]}
        </Block>
        <Block onClick={() => handleClick(8)}>
          {isMarking ? '-' : board[8]}
        </Block>
      </Row>
      <Button onClick={handleClear}>Limpiar Tablero</Button>
    </Container>
  )
}
export default Room
