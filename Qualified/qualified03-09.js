//questão 01

function contaVitorias(lista, pais) {
    var contadorCampeoes = 0;
for(var i=0; i < lista.length; i++) {
  if (lista[i].country == pais) {
      contadorCampeoes += 1
  }
}
return contadorCampeoes
}

//questão 02

var jabulani = fabricaDeBolas('bola da copa')
var baba = fabricaDeBolas('bola normal')

//questão 03

function fabricaDeBolas (tipo) {
    var bola = {}
    
    bola.tipo = tipo;
    bola.getTipo = function() {
      return this.tipo
    }
    bola.setTipo = function(novoTipo) {
      bola.tipo = novoTipo
      return novoTipo
    }
    return bola
  }

//questão 04

function somaBoletim (boletim) {
    var total = boletim.matematica + boletim.historia + boletim.fisica + boletim.geografia + boletim.quimica    
    return total
  }
  
  var boletimFilho1 = somaBoletim(boletim1)
  var boletimFilho2 = somaBoletim(boletim2)
  var boletimFilho3 = somaBoletim(boletim3)
  
  if (boletimFilho3 == boletimFilho2 || boletimFilho3 == boletimFilho1 || boletimFilho1 == boletimFilho2) {
      return 'A bicicleta será dividida.'
  } else if (boletimFilho2 > boletimFilho1 && boletimFilho2 > boletimFilho3) {
      return 'Eu preciso comprar uma bicicleta para meu segundo filho.' 
  } else if (boletimFilho3 > boletimFilho2 && boletimFilho3 > boletimFilho1) {
      return 'Eu preciso comprar uma bicicleta para meu terceiro filho.' 
  } else if (boletimFilho1 > boletimFilho2 && boletimFilho1 > boletimFilho3) {
    return 'Eu preciso comprar uma bicicleta para meu primeiro filho.' 
}
  
}

//questão 05

function fabricaDicionario (){
    
    return {
      objeto: {},
      novoItem(chave, valor){
        this.objeto[chave] = valor
        },
      pesquisar(chave){
        if(this.objeto[chave]){
          return this.objeto[chave]
        } else {
          return `Não foram encontrados registros para ${chave}`
        }
      }
      
    }
 }
 
 var dict = fabricaDicionario()