import React, { useCallback, useState} from 'react';
import './App.css';
import Todo from './components/Todo';

export default function App(props){


  const[elems, setElems] = useState(["asd","fff"])
  const[elemInpt, setElemInpt] = useState('')
  const[count, setCount] = useState(1)

  const handleChange=((e)=>{setElemInpt(e.target.value)}); 

  const addTodo = useCallback(()=>{setElems((t)=>[...t, elemInpt])}, [elems]);

  const increment = () =>{
    setCount((count)=>count+1);
  }
  

   return (
    <div className="App">
      
      <div className="controls">
        <Todo arg={elems} addTodo={addTodo}/>
        <input className="elem" type="text" id="inp1" onChange={handleChange} value={elemInpt}></input>

        <p>{count}</p>
        <button className="elem" onClick={increment} >inctement</button>
      </div>
    </div>
  );   
}

