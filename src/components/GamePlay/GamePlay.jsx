import React from 'react'
import TotalScore from '../TotalScore/TotalScore'
import NumberSelector from '../NumberSelector/NumberSelector'
import './GamePlay.css'
import Dice from '../Dice/Dice'

import { useState } from 'react'
import Rules from '../Rules/Rules'
const GamePlay = () => {

    const [selected,setSelected]=useState()

    const [dice,setDice]=useState(1)

    const [score,setScore]=useState(0)

    const [error,setError]=useState("")

    const[visible,setVisible]=useState(false)

    const generate=(min,max)=>{
        return Math.floor( Math.random()*(max-min)+min)
      }
    
      const rollDice=()=>{
        const randomNumber=generate(1,7)
    
        setDice(randomNumber)

        if(!selected){
            setError("you haven't selcted any number ")
            return
         }
        

        if(selected===randomNumber){
            setScore(prev=>prev+randomNumber)
        }
        else{
            setScore(prev =>prev-2)
        }
        setSelected(undefined)
      }

      const handleReset=(e)=>{
        e.preventDefault()
        window.location.reload()
      }

    return (
        <div className="main-container">
            <div className='gameplay-container'>
                <TotalScore score={score} />
                <NumberSelector selected={selected} setSelected={setSelected} error={error} setError={setError}/>
            </div>
            <Dice dice={dice} rollDice={rollDice}/>

            <div className='btns-container'>
                <button className="btns" onClick={handleReset}>Reset</button>
                <button className="btns" onClick={()=>setVisible(prev=> !prev)}>{visible ?"Hide":"Show Rules"}</button>
            </div>
            {
                visible && <Rules/>
            }
        
        </div>

    )
}

export default GamePlay
