import React, { useCallback, useState} from 'react';
import './App.css';
import Todo from './components/Todo';

export default function App(props){

  React.state={
    styleVar: 1, 
  }
  const[elems, setElems] = useState(["asd","fff"])
  const[elemInpt, setElemInpt] = useState('')
  const handleChange=((e)=>{setElemInpt(e.target.value)});
  

   return (
    <div className="App">
      
      <div className="controls">
        <Todo arg={elems}/>
        <input className="elem" type="text" id="inp1" onChange={handleChange} value={elemInpt}></input>
        <button className="elem" onClick={(e)=>{setElems(elems=>[...elems, elemInpt]); setElemInpt(elemInpt=>"")}} >ADD TO LIST</button>
        <button className="elem" >Change style</button>
      </div>
    </div>
  );   
}

  const memF=(elems )=>{
    //setElems();
    //console.log("why?> "+ elems );
  }
