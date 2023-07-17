 import { Component } from "react";
 import PropTypes from "prop-types";

class Greet extends  Component{
  render(){
    const {name} = this.props;
 
    return(
        <div>
          <h1>Hello, my name is {name} </h1>
        </div>      
    );
  }
}

Greet.propTypes = {
  name:PropTypes.string
};


export default Greet;