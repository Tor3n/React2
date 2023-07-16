import { memo } from 'react';
import React, { useState } from 'react';



const Todo = ({arg}) =>{
   
    return(
        <div>
          {arg.map((el, index)=>{
            return <li key={index}>{el}</li>
          })}
        </div>
    );
}

export default memo(Todo);