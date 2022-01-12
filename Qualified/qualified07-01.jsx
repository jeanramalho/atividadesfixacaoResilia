//1
import React, {Component} from "react";


class App extends Component {
  constructor(){
    super()
    this.state = {date: new Date()};
  }
  componentWillUnmount() {
    alert("Componente será desmontado");
  }
  
  render(){
     return(
      <h1>Olá, mundo!</h1>
    )
  }
   
}

export default App;



//2
import React , {useState} from 'react';

function App(){
  const [input, setInput] = useState("")
  return(
    <input onChange={(ev)=>setInput(ev.target.value)} value={input}></input>
  )
}

export default App