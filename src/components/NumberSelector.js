import styled from "styled-components"

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    
    const arr=[1,2,3,4,5,6];
    const handleClick=(value)=>{
          if (selectedNumber===value) {
            setSelectedNumber(-1);
          }
          else{
            setSelectedNumber(value);
            setError("")
          }
    }
  return (
    <NumberSelectorContainer>
   <p className="error" >{error}</p>
    <div className="flex">
    {
        arr.map((value,index)=>{
            return(
                <Box 
                isSelected={selectedNumber===value}
                onClick={()=>handleClick(value)} 
                key={index}>
                {value}
                </Box>
            )
        })
    }
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer=styled.div`
   display: flex;
   flex-direction: column;
   align-items : end;

   .error{
    color: #FF0C0C;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
   }

   .flex{
    display: flex;
    gap: 24px;
   }
   p{
    font-size: 24px;
    font-weight: 700;
    padding-top: 20px;
   }
`

const Box=styled.div`
    display: grid;
    place-items: center;
width: 4.5rem;
height: 4.5rem;
padding: 1.125rem 0rem;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
border: 1px solid #000;
background-color: ${(props)=>(props.isSelected ? "black" : "white")};
color: ${(props)=>(props.isSelected ? "white" : "black")};

&:hover{
    cursor: pointer;
}
`