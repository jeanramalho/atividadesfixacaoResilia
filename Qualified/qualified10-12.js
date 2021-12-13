//1


import React from "react";

//Esse é o esqueleto do componente, não o modifique! 
class App extends React.Component {
  render(){
     return(
   <div>
{/Sua solução deverá ser escrita aqui, dentro da div/}
         <p>Meu primeiro parágrafo</p>


  </div>
  );
  }
};

export default App;



//2


import React from "react";

//Esse é o esqueleto do componente, não o modifique! 
class App extends React.Component {
  render(){
     return(
   <div>
{/Sua solução deverá ser escrita aqui, dentro da div/}
         <h1 className="meuTitulo">Olá, mundo!</h1>
         <p className="paragrafo">Paragrafo</p>
  </div>
  );
  }
};

export default App;



//3


import React from "react";

//Não alterar a estrutura do componente
class App extends React.Component {
constructor(props){
  super(props)
  this.identidade = {
  nome: "Olivia",
  idade: 25
}
  }
  render(){
    return (
      <div>
        {/Sua solução deverá ser escrita aqui, dentro da div/}
          <h1>Meu nome é {this.identidade.nome}</h1>
          <p>e tenho {this.identidade.idade} anos</p>
      </div>
    )
  }

};

export default App;