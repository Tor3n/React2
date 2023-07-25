import './App.css';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import ThemeSwitcher from './ThemeSwitcher';
import CarussExmp from './Carruss';
import {useRef, useState, useEffect} from 'react';

function App(){
  const [inputValue, setInputValue] = useState("");
  const myRef=useRef(null)
  const previousInputValue = useRef("");

  const someFunc = (e) =>{
    e.preventDefault()
    myRef.current.focus()
  }

  useEffect(()=>{
    console.log("hehe")
    previousInputValue.current = inputValue
    console.log("What was updated: "+previousInputValue.current)
  },[inputValue]);

  return (
    <div className="mb-2">

      <CarussExmp/>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" ref={myRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text"/>
      </Form.Group>

      <Button className='button' variant = "primary" type="submit" onClick={someFunc}>
        SetFocus
      </Button>

      <Button className='button' variant = "primary" type="submit">
        submit
      </Button>     

      <ThemeSwitcher/>

      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
      <h2>CurrentValue: {inputValue}</h2>    
      <h2>Previous Value: {previousInputValue.current}</h2>
    </div>
    
  );   
}

export default App;