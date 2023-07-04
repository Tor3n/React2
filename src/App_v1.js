
import './App.css';
import {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(){
    let counterNew=this.state.counter+1
    this.setState({
      counter: counterNew,
      visibility: false
    })
  } 

  handleClick2(){
   
    this.setState({
      visibility: !this.state.visibility
    })
  } 

  render(){
    if(this.state.visibility){
      return(
        <div> heheheh </div>
        );
    }

   return (
    <div className="App">
        <p>count: {this.state.counter}</p>
        <button onClick ={this.handleClick}> Increment </button>
        <p> </p>
        <button onClick ={this.handleClick2}> hide/show </button>
    </div>
  );   
  }
}

export default App;
