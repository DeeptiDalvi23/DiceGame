import React from 'react'
import './StartGame.css'
const StartGame = ({toggleGame}) => {
  return (
    <div className='container'>
      <div className='img-container'>
        <img className="img" src="/images/dice.webp" alt="" />
      </div>
      <div className="content">
        <h1>Dice game</h1>
        <button onClick={toggleGame}>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame
