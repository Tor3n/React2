import { useState } from 'react';
import './App.css';

function App(props){

  const Test = (a) =>{
    console.log(a)
  }

  const[state, setState] = useState(props.counter)  
  const[test, setTest] = useState(() => Test('abcaaac'))
  //console.log(useState(5))
  
  const onChangeCounter = (e) => {
    setState(state => state + e)
  }

  const onResetCounter = ( ) => {
    setState(state => 0)
  }

  const onRandomCounter = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    setState(Math.floor(Math.random()*(max-min+1)+min))
    
  }

   return (
    <div className="App">
      <div className='counter'>{state}</div>
      <div className='controls'>
        <button onClick={() => onChangeCounter(1)}>INC</button>
        <button onClick={() => onChangeCounter(-1)}>DEC</button>
        <button onClick={() => onResetCounter()}>RESET</button>
        <button onClick={() => onRandomCounter(20,30)}>RND</button>       
      </div>
    </div>
  );   
}

export default App;
