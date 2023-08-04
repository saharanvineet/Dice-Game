import { useState } from 'react';
import StartGame from './components/StartGame';
import Play from './components/play';

function App() {
  const[isOpened,setIsOpened]=useState(false);

  const toggleGamePlay=()=>{
    setIsOpened(!isOpened);
  }

  return (
    <div>
    {
      isOpened?<Play/>: <StartGame toggle={toggleGamePlay}/>
    }
    </div>
  )
}

export default App;