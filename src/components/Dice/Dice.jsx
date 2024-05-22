import React, { useState } from 'react'
import './Dice.css'
const Dice = ({dice,rollDice}) => {

  

  

  return (
    <div className='dice-conatiner'>
     <div className='img'>
        <img src={`images/dice-${dice}.png`} alt="" onClick={rollDice}/>
        <p>Click Dice to Roll</p>
     </div>
    </div>
  )
}

export default Dice
