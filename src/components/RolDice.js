import React from 'react'
import styled from "styled-components"

function RolDice({currentDice,rolDice}) {
    
  return (
    <DiceContainer>
    <div className='dice' onClick={rolDice}>
      <img src={`/images/dice_${currentDice}.png`} alt="img1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RolDice

const DiceContainer=styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 48px;
   
   p{
    color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
   } 

   .dice{
     cursor: pointer;
   }
   
`