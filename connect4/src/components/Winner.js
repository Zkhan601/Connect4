import './Winner.css'
import React from 'react'
import ReactConfetti from 'react-confetti'


const Winner = ({winner,reset}) => 
    
    <p className="center">
        
        <span>{
            winner === -1
            ?   'Tie!'
            :   `Player ${winner} won!`
            }
        </span>
        <br/>
        
        <br/>
        <ReactConfetti width={265} height={120}/> 
        <button onClick={reset}>Play again</button>
    </p>

export default Winner 