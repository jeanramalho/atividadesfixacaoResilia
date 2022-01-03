//1 
//Crie aqui seu componente App com as instruções dadas
//Utilize uma tag HTML que tenha valor semântico de conteúdo principal da página
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.meuClique = this.meuClique.bind(this)
        this.state = {
            contador: 0
        }
    }
    
    meuClique() {
        this.setState({ contador: this.state.contador + 1 })
              
    }
    
    render() {
        return (
          <main>
          <h1>Cliques: {this.state.contador}</h1>
            <button onClick={this.meuClique}>
                    Clique!
            </button>
          </main>
        )
    }
}

export default App;


//2
//Crie aqui seu componente App com as instruções dadas
import React, { Component } from 'react'

export default class app extends Component {
   constructor(props) {
      super(props)
      this.state = {
            nome: ''      
        }
    }
  
  componentDidMount() {
        this.setState({ nome: "Jean Ramalho" })
    }
  
  render(){
    return(
      <h1>{this.state.nome}</h1>
    )
  }
  
  
}


//3
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cor: 'azul',
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cor: 'verde',
      });
    }, 1000);
  }
  
  componentDidUpdate() {
    alert(`A cor mudou para: ${this.state.cor}`);
  }
  
  render() {
    return (
      <div>
        <h1>
          Cor favorita: {this.state.cor}
        </h1>
      </div>
    );
  }
}