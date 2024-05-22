import React, { useState } from 'react'
import StartGame from './components/StartGame/StartGame'
import GamePlay from './components/GamePlay/GamePlay'

const App = () => {
  const [isGameStarted,setIsGameStarted]=useState(false)

  const toggleGame=()=>{
    setIsGameStarted(true)
  }
  return (
    <>{
      isGameStarted?<GamePlay/>:<StartGame toggleGame={toggleGame}/>
    }
      
    </>
  )
}

export default App
