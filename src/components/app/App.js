import {Component} from 'react';
import './App.css';
import Person from '../person/person';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[
        {id:123, name: 'Alvin', phone: '1231231', career: 'IT', email:'heh@kek.ru',meeting: '21:00'},
        {id:124,name: 'Martin', phone: '341', career: 'HR', email:'heh@kek.ru',meeting: '21:00'},
        {id:125,name: 'Dave', phone: '555531', career: 'IT', email:'heh@kek.ru',meeting: '21:00'},
        {id:126,name: 'Kek', phone: '1234131', career: 'HR', email:'heh@kek.ru',meeting: ' '},
        {id:127,name: 'Lel', phone: '446431', career: 'IT', email:'heh@kek.ru',meeting: ''}
      ]
    }
  }

  onValueChange = (id, value) => { 
    
    //console.log(id, value);
    this.setState( ({data})=>{
      const item = data.find(item =>item.id===id)
      console.log(item)
      const newItem = {...item, meeting: value} 
      const newData = [...data.slice(0, data.indexOf(item)),newItem, ...data.slice(data.indexOf(item)+1, data.length)]
      //console.log(newData)
      return{
        data:newData
      }
    })
  }

  render(){
    const {data} =  this.state
    const personList = data.map(item =>{
      return <Person {...item} key={item.id} onValueChange={(id,value)=>this.onValueChange(id,value)} /> 
    })

   return (
    <div>
      <table className="responsive-table">
      <thead>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Career</th>
            <th>Email</th>
            <th>Meeting</th>
        </tr>
      </thead>
      <tbody>
        {personList}
      </tbody>
    </table>
  
  <input type="text"/>
  </div>
  );   
  }
} 

export default App;
