import styled from "styled-components"

function TotalScore({score}) {
  return (
    <Score>
    <h1>{score}</h1>
    <p>Total Score</p>
  </Score>
  
  )
}

export default TotalScore

const Score=styled.div`
   height: 8.4375rem;
    width: 8.4375rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        width: 3.875rem;
    height: 7rem;
    color: #000;
font-family: Poppins;
font-size: 6.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
    }

   p{
    color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top: 10px;
   } 
`
