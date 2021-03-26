import logo from './logo.svg';
import './App.css';
import { Component , useState } from "react";

// function App() {
//   const [state,setstate]= useState({age: 30})

//   const reduceage = () =>{
//     let newage = state.age - 1;
//     setstate({ age:newage})
//   }
//   const increaseage = () =>{
//     let newage = state.age + 1;
//     setstate({age:newage})
//   }
//   return (
//     <div>
//       <h1>Age is {state.age}</h1>
//       <botton onClick={reduceage}><h1>-</h1></botton>
//       <botton onClick={increaseage}><h1>+</h1></botton>
//     </div>
//   );
// }

class App extends Component{
    constructor(){
        super();
        this.state= {age:18};
    }
    increase = () =>{
        let newage=this.state.age + 1
        this.setState({age: newage})
    }


    render(){
      return(
        <div>
        <h1>age is {this.state.age} years</h1>
    <input type="button" value="increase age +1" onClick={this.increase}></input>
   </div>
      )
    }

}

export default App;
