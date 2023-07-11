import {Component} from 'react';

class StateTest extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            num: this.props.num
        }
    }

    onHandleChange = (e) =>{
        this.setState({
            text:e.target.value
        })
    }

    onHandleChange1 = (e) =>{
        this.setState({
            num:this.state.num +1
        })
    }

    

    render(){
        let {num} = this.state
        //const showButton = document.getElementById("showDialog");
        //const favDialog = document.getElementById("favDialog");
        //showButton.addEventListener("click",()=>{favDialog.showModal();})
        
        return(
            
            <div>
                <input type="text" placeholder='Type smth' value = {this.state.text} onChange={e=>this.onHandleChange(e)}/>
                <p>{this.state.text}</p>
                <input type="button"   value = "++" onClick={e=>this.onHandleChange1(e)}/>
                <p>{num}</p>

                <dialog id="favDialog">
                    <form>
                        <p>Hi Mom! Check out my dialog</p>
                        <button>Close</button>
                    </form>
                </dialog>
                <button onClick={()=>{document.getElementById("favDialog").showModal()}}>Open Dialog</button>
            </div>
        );
    }
}

export default StateTest;