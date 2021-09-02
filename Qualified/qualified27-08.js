
// questão 01
// Visão geral
// Utilize o arquivo solution.js na pasta src para desenvolver a solução dessa atividade.
// Não modifique os comandos e códigos já presentes pois eles são necessários para a configuração do ambiente.

// Fábrica de botões
// Nessa atividade você deverá utilizar seus conhecimentos de manipulação de DOM para implementar uma função que fabrica quantos botões pedirmos.

// A função que será implementada se chama fabricaBtn. Ela recebe como argumento o número de botões que devem ser criados. Sua função deve retornar um array com todos os botões criados (utilizando o DOM). Além disso, os botões devem ter como seu texto interno o número dele. A contagem deve começar em 1 e terminar no argumento.

//resposta
module.exports = function fabricaBtn (nBtn) {
    //insira seu código aqui!
    let i = 1
    let arrBtn = []
    while (i <= nBtn){
      let btn = document.createElement('button')
      btn.innerText = i.toString()
      arrBtn.push(btn);
      i++
    }
    return arrBtn
  }

//questão 02
// Visão geral
// Utilize o arquivo solution.js na pasta src para desenvolver a solução dessa atividade.
// Não modifique os comandos e códigos já presentes pois eles são necessários para a configuração do ambiente.

// Estilizando o cabeçalho
// Nessa atividade você deverá utilizar seus conhecimentos de manipulação de DOM para manipular o cabeçalho de uma página web!
// A estrutura inicial da página fornecida é:

// <html>
//   <head>
//   </head>
//   <body>
//     <header>
//       <p id="logo">
//       </p>
//       <nav id="menu">
//         <p>Home</p>
//         <p>Nossos projetos</p>
//         <p>Contato</p>
//         <p>Quem somos</p>
//       </nav>
//     </header>
//   </body>
// </html>
// A sua função estilizaHeader deve modificar o cabeçalho (header) da página da seguinte maneira:

// Utilizar como texto no parágrafo interno do header Resilia
// Utilizar como tamanho de fonte do texto do parágrafo interno do header 20px
// Configurar o display da nav para que seja um flex container
// Configurar a direção do flex container da nav para que em linha (row)

// resposta
    module.exports = function estilizaHeader(document) {
    //insira aqui seu código!
    let header = document.getElementById ('logo')
    header.innerText = "Resilia"
    header.style.fontSize = '20px'
    let nav = document.getElementById ('menu')
    nav.style.display = 'flex'
    nav.style.flexDirection = 'row'
}

//questão 03
// Visão geral
// Utilize o arquivo solution.js na pasta src para desenvolver a solução dessa atividade.
// Não modifique os comandos e códigos já presentes pois eles são necessários para a configuração do ambiente.

// Alterando conteúdo conteúdo
// Uma funcionalidade recorrente em aplicações web é a modificação e atualização de dados e, consequentemente, elementos da página.
// Nessa atividade você deverá utilizar seus conhecimentos de manipulação de DOM para criar uma função que, ao receber o id de uma foto/imagem e um novo src, modifica este atributo da imagem.

// Entrada	src da imagem
// 'img-23655', "http://example.com"	"http://example.com"
// Observação: Caso não exista uma imagem com o id passado como argumento na página nada deve ser feito ou modificado.

// A estrutura da página fornecida é a seguinte:

// <DOCTYPE html>
// <html>
//   <head>
//   </head>
//   <body>
//     <header>
//       <p id="logo">
//       </p>
//       <nav id="menu">
//         <p>Home</p>
//         <p>Nossos projetos</p>
//         <p>Contato</p>
//         <p>Quem somos</p>
//       </nav>
//     </header>
//     <main>
//       <div class="card">
//         <img src="https://s3_res-bt.com/resee2342/rex_lab.png">
//         <p>
//           Rex
//         </p>
//         <p>
//           Labrador
//         </p>
//         <p>
//           3 anos
//         </p>
//       </div>
//             <div class="card">
//         <img src="https://s3_res-bt.com/resee2342/molly_pug.png">
//         <p>
//           Molly
//         </p>
//         <p>
//           Pug
//         </p>
//         <p>
//           15 anos
//         </p>
//       </div>
//     </main>
//   </body>
// </html>

//resposta

module.exports = function modifyImg(document, id, newSrc) {
    //insira aqui seu código
    var img = document.getElementById(id)
    if (img){      
        img.setAttribute('src',newSrc)
    }
  
  }


//questão 4
// Visão geral
// Utilize o arquivo solution.js na pasta src para desenvolver a solução dessa atividade.
// Não modifique os comandos e códigos já presentes pois eles são necessários para a configuração do ambiente.

// Adicionando conteúdo
// A utilização de API's Rest é muito comum em aplicações web. Com elas, as informações do sistema ficam armazenadas em um servidor e a aplicação web no cliente (front end) realiza requisições de informação ao servidor. Quando essas informações chegam ao cliente, o JavaScript da aplicação é utilizado para carregar as informações na página.
// Nessa atividade você deverá utilizar seus conhecimentos de manipulação de DOM para criar uma função que, ao receber as informações (não se preocupe com essa parte, passaremos isso como argumento em elementData) modifica a página da seguinte forma:

// Para cada conjunto de dados (array) passado em elementData, cria um card da seguinte forma:
// Cria uma div mais externa
// Para cada elemento do array cria um parágrafo com o texto do elemento
// Adiciona em ordem cada elemento à div
// Adiciona a div a parte principal da página (main)
// Entrada	Conteúdo da main
// []	''
// [['Rex', 'Labrador', '3 anos']]	'<div><p>Rex</p><p>Labrador</p><p>3 anos</p></div>'
// [['Rex', 'Labrador', '3 anos'], ['Molly', 'Pug', '15 anos']]	'<div><p>Rex</p><p>Labrador</p><p>3 anos</p></div><div><p>Molly</p><p>Pug</p><p>15 anos</p></div>'
// A estrutura da página fornecida é a seguinte:

// <DOCTYPE html>
// <html>
//   <head>
//   </head>
//   <body>
//     <header>
//       <p id="logo">
//       </p>
//       <nav id="menu">
//         <p>Home</p>
//         <p>Nossos projetos</p>
//         <p>Contato</p>
//         <p>Quem somos</p>
//       </nav>
//     </header>
//     <main></main>
//   </body>
// </html>
// Sugestäo: Para modificar campos textuais, utilize o atributo textContent

// resposta
module.exports = function addCards(document, elementData) {
    //insira aqui seu código
    var main = document.querySelector('main')
    
    for (let cont=0; cont < elementData.length; cont++){
      var div = document.createElement('div')
      
      for (let j=0; j < elementData[cont].length; j++){
          var paragrafo = document.createElement('p')
          paragrafo.textContent = elementData[cont][j]
          div.appendChild(paragrafo)
      }
      main.appendChild(div)
    }
  }

//questão 05
// Visão geral
// Utilize o arquivo solution.js na pasta src para desenvolver a solução dessa atividade.
// Não modifique os comandos e códigos já presentes pois eles são necessários para a configuração do ambiente.

// Deleta aí
// Uma funcionalidade comum em muitas aplicações web é a deleção de dados e, consequentemente, elementos da página.
// Nessa atividade você deverá utilizar seus conhecimentos de manipulação de DOM para criar uma função que atribui um evento ao botão presente na página.
// Esse evento deverá excluir o nó da árvore do DOM de classe "card".

// Utilize obrigatóriamente a propriedade onclick. Os testes automatizados foram criados para que ela seja validada.

// A estrutura da página fornecida é a seguinte:

// <DOCTYPE html>
// <html>
//   <head>
//   </head>
//   <body>
//     <header>
//       <p id="logo">
//       </p>
//       <nav id="menu">
//         <p>Home</p>
//         <p>Nossos projetos</p>
//         <p>Contato</p>
//         <p>Quem somos</p>
//       </nav>
//     </header>
//     <main>
//       <div class="card">
//         <img id="img-323" src="https://s3_res-bt.com/resee2342/rex_lab.png">
//         <p>
//           Rex
//         </p>
//         <p>
//           Labrador
//         </p>
//         <p>
//           3 anos
//         </p>
//         <button>
//           Excluir Card
//         </button>
//       </div>
//     </main>
//   </body>
// </html>

// resposta
module.exports = function addEventDelBtn(document) {
    //insira seu código aqui!
    //utilize onclick para atribuir eventos
    var card = document.querySelector('.card')
    var button = document.querySelector ('button')
    button.onclick = function (){
      card.remove()
    }
  }