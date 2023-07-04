 
import {Component} from 'react';
import React from "react";
import './clicker.css'
import styled, { css } from 'styled-components'


class Clicker extends Component{
  constructor(props){
    super(props)

    this.state = {
      counter: 0,
      visibility:false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickED = this.handleClickED.bind(this);
  }

  handleClick(){
    let counterNew=this.state.counter+1
    this.setState({
      counter: counterNew
    })
  } 

  handleClickED(){
    this.setState({
      visibility: !this.state.visibility
    })
  }

  render(){
    var abutton ;
  
    const Button = styled.a`
    --accent-color: white;

    background: transparent;
    border-radius: 3px;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
    display: inline-block;
    margin: 0.5rem 1rem;
    padding: 0.5rem 0;
    transition: all 200ms ease-in-out;
    width: 11rem;
  
    &:hover {
      filter: brightness(0.85);
      color: yellow;
    }
  
  
    &:active {
      filter: brightness(1);
    }
    
    ${props =>
      props.$primary &&
      css`
        background: '#BF4F74';
        color: green;
      `};
 
    `

    const TButton = styled(Button)`
        color:tomato;
        border-color:tomato;
      `;

    if(this.state.visibility){ 
      abutton =  <div class="he">heheheh</div> ;
    } else{
      abutton = <div></div>;
    }

   return (
    <div className="Clicker">
        <p>count: {this.state.counter}</p>
        <button onClick ={this.handleClick}> Increment </button>
        <p></p>
        <button onClick ={this.handleClickED}> hide/show </button>
        {abutton}
        <p></p>
        <Button href="https://github.com"  >GitHub</Button>
        <Button $primary href="https://github.com"  >GitHub</Button>
        <TButton>Tomato</TButton>
    </div>
  );   
  }
}

export default Clicker;
