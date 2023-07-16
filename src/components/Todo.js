import { memo } from 'react';
import React, { useState } from 'react';



const Todo = ({arg, addTodo}) =>{
   console.log("todo render")
    return(
        <div>
          {arg.map((el, index)=>{
            return <li key={index}>{el}</li>
          })}
          <button onClick={addTodo}>add</button>
        </div>
    );
}

export default memo(Todo);