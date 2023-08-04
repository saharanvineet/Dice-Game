import styled from "styled-components"

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
padding: 1.25rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
background: #FBF1F1;

h2{
    color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.text{
    display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
}
`
