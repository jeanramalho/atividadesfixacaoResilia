//QUESTÃO 1

// ARQUIVO APP
import React from "react";
import Menu from "./Componentes/Menu.jsx"
import Conteudo from "./Componentes/Conteudo.jsx"
import Rodape from "./Componentes/Rodape.jsx"

//Não modifique a estrutura do componente
class App extends React.Component{
  render(){
    return(
    <div>
        {/*Seu código aqui dentro da div!*/}
        <Menu />
        <Conteudo />
        <Rodape />
    </div>
    )
  }
}

export default App;


//ARQUIVO CONTEUDO
//Esse componente precisa ter uma tag pai que tenha semântica de ser o conteúdo principal da página

import React from "react";

class Conteudo extends React.Component {
  render() {
    return (
     <main>
        <h1> Esse é o Título </h1>
        <p> Esse é o parágrafo </p>
     </main>
        )
  }
}
export default Conteudo

//ARQUIVO MENU
import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav>
           <ul>
             <li> <a> Inicio </a> </li>
             <li> <a> Sobre </a> </li>
             <li> <a> Contato </a> </li>
          </ul>
        </nav>
      </header>
        )
  }
}
export default Menu

//ARQUIVO RODAPE
import React from "react";

class Rodape extends React.Component {
  render() {
    return (
     <footer>
        <p> Esse é o parágrafo do rodapé </p>
     </footer>
        )
  }
}
export default Rodape

// QUESTÃO 2

// ARQUIVO CONTEUDO
//Esse componente precisa ter uma tag pai que tenha semântica de ser o conteúdo principal da página
import React from "react";

class Conteudo extends React.Component {
  
 render() {
        return (
            <main>
               <h1>{this.props.nome}</h1>                
               <p>{this.props.idade}</p>
            </main>
        )
  }
}
export default Conteudo;

//ARQUIVO APP
import React from "react";
import Conteudo from "./components/Conteudo.jsx"

class App extends React.Component {
    render(){
        return(
             <Conteudo nome="Maria" idade={25} />         
        );
    }
}
export default App;


//QUESTÃO 3

//ARQUIVO APP
import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props)
    this.fuiClicado = this.fuiClicado.bind(this)
  }
  
  fuiClicado() {    
    return "Fui clicado!"
  }
  
  render(){
    return(
     /* apenas retorne o botão*/
      <button onClick={this.fuiClicado}>Clique!</button>
    )
  }
}
export default App;
