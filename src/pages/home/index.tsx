import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

const Home: FC = () => {
  const history = useHistory()

  function handleClick() {
    history.push('/room/AAAA')
  }

  return (
    <>
      <h1>Página de inicio</h1>
      <button onClick={handleClick}>Ir a la sala de juego</button>
    </>
  )
}

export default Home
