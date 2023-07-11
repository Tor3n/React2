import {Component} from 'react';
import Clicker from './components/clicker';
import MuiJs from './components/muiJS';
import BasicRating from './components/BasicRating';
import StateTest from './components/StateTest';
import './components/sass.scss';

class App extends Component{
  render(){

   return (
    <div className="App">
        <Clicker/>
        <p></p>
        <MuiJs/>
        <p></p>
        <BasicRating/>
        <p></p>
        <h1>HALO</h1> 
        <p></p>
        <StateTest num ={5}/> 
    </div>
    
  );   
  }
}

export default App;
