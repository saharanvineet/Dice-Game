import styled from "styled-components"

function StartGame({toggle}) {
  return (
    <Container >
      <img src='images/dices 1.png' alt="img" />
      <div className="content">
      <h1>DICE GAME</h1>
      <Button className="btn" onClick={toggle}>Play Now</Button>
      </div>

    </Container>
  )
}

export default StartGame;
const Container=styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      padding: 2vw;

  .content{
     h1{
      color: #000;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 8%;
    white-space: nowrap;
     }

  }   
      
  `
const Button=styled.div`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: #000;
color: #FFFFFF;
transform: scale(1.2);
transition-duration: 0.5s;
margin-left: 15%;

&:hover{
  background:#FFFFFF;
    color: #000;
    transform: scale(1.2);
    transition-duration: 0.5s;
    cursor: pointer;
    border: 1px solid black;
}
`  

