import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

export default function App(props){

  const[calls, setCalls] = useState(0) 
  const[red, setRed] = useState(false)
  const sttl = red===false? "aquamarine" : "red";
  const slf =  useMemo((e)=>slowFunction(calls),[calls]);

  const myComponentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: `${sttl}`,
 }

   useEffect(()=>{
    console.log("heh")
   });
 
  //<button onClick={() => onRandomCounter(20,30)}>RND</button> 
  // <button onClick={(e)=>setRed(red===true ? false : true)}>Colour change</button>

   return (
    <div style={myComponentStyle} className="App">
      <div className="CallsLable">REST CALLS: {calls}</div>
      <div className="controls">
        <button onClick={(e)=>setCalls(calls+1)}>START CALL</button>
        <button onClick={(e)=>setRed(red===true ? false : true)} >Colour change</button>
      </div>
    </div>
  );   
}

function slowFunction(num ){
  for(let i = 0; i <= 2000000000; i++ ){}
  //console.log("sttl "+sttl)
  return console.log("calling slow function " +num*2)
}