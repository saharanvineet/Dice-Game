import styled from "styled-components"
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RolDice from "./RolDice";
import Rules from "./Rules";
import { useState } from "react";

const Play = () => {
  const [selectedNumber,setSelectedNumber]=useState(undefined);
  const[currentDice,SetCurrentDice]=useState(1);
  const[error,setError]=useState("");
  let [score,SetScore]=useState(0);
  const[rules,SetRules]=useState(false);
  
  const genereateRandomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rolDice = () =>{
    if (!selectedNumber) {
      setError("You have not selected any number")
      return ;
    } 
    setError("");
    const randomnum=genereateRandomNumber(1,6);
    SetCurrentDice(randomnum);
    setSelectedNumber(undefined);
    const finalnum=genereateRandomNumber(1,6);
    const chosednum=selectedNumber;
    if (finalnum===chosednum) {
      SetScore(score+=finalnum)
    }
    else{
      SetScore(score-=2)
    }
}

  return (
    <Container className="container">
    <div className="top">
        <div className="score">
          <TotalScore score={score} />
        </div>
        <div className="operate">
          <NumberSelector setError={setError} selectedNumber={selectedNumber} error={error} setSelectedNumber={setSelectedNumber} />
        </div>
      </div>
      <div className="bottom">
        <div className="img">
        <RolDice currentDice={currentDice} rolDice={rolDice}/>
        </div>
        <div className="btns">
        <button className="btn1" onClick={()=>SetScore(0)}>Reset Score</button>
        <button className="btn2" onClick={()=>SetRules(prev=>!prev)}>{rules?"Hide":"Show"} Rules</button>
        </div>
      </div>
     { rules && <Rules/>}
    </Container>
  );
};

export default Play;

const Container=styled.div`
/* padding-top: 20px; */
.top{
  display: flex;
justify-content: space-around;
align-items: end;
}

.btns{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.btn1{
  border-radius: 0.3125rem;
border: 1px solid #000;
cursor: pointer;
background: #FFF;
display: flex;
width: 13.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.625rem;
}

.btn2{
  display: flex;
width: 13.75rem;
cursor: pointer;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.3125rem;
background: #000;
color: #FFF;
}

`