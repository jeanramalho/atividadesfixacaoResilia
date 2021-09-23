//2
//Insira aqui seu código
class Fantasma{
  constructor(cor) {
    switch (cor) {
      case "v":
        this.cor = "vermelho"
        break;
        case "a":
          this.cor = "amarelo"
          break;
          case "r":
            this.cor = "roxo"
            break;
      default:
        thrown("Cor Inválida")
        break;
    }

  } 
  
  }


//3
class Bola {
  

  constructor(tipo) {
    this._tipo = tipo
    this.getTipo = () => {
      return this._tipo 
    }
    this.setTipo = (value) => {
      this._tipo = value
    }

  }
}


//4
class Pessoa {
  constructor(nome, sobrenome, dataNascimento) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.dataNascimento = dataNascimento
    this.nomeCompleto = () => { return this.nome + ' ' + this.sobrenome }
    this.abreviacao = () => { 
      const nomeTodo = this.nome + ' ' + this.sobrenome
      let nomezinho = nomeTodo.match(/\b(\w)/gi)
        
        return nomezinho.join('.').toString()
    }
   
  }
}


//5
//Insira aqui as declarações e implementações das classes Pilha e Fila
class Pilha extends Armazem {
  
  constructor (...el){
      super()
      this.arr.push(...el)
  }
  empilha(i){
    super.add(i)
  }
 desempilha(){
    
  return this.arr.pop()
}
}

class Fila extends Armazem {
  constructor(...el) {
    super()
    this.arr.push(...el)
  }
  chegada(...i){
    this.arr.push(...i)
  }
  partida(){
    return this.arr.shift()
  }
}



//6
//Insira aqui a implementação da classe Grupo e da função calculaNegacoes
class Grupo {
  constructor(nPessoas) {
    this.npessoas = nPessoas;
  }
}

function calculaNegacoes(mesasA, mesasB, grupos) {
  let resultado = grupos.length + 1;
  
  for (let i = 0; i < grupos.length; i++) {
    if (grupos[i] === 2 && mesasB > 0) {
      resultado--;
      mesasB--;
    }
  }
  
  resultado -= mesasA + (mesasB * 2);
  
  return resultado + 1;
}

//7
//insira aqui as declarações das classes: Figura, Quadrado e Circulo
class Figura {
  constructor(cor) {
    this.cor = cor;
    this.mensagemErro = 'Método abstrato. Implementar nas classes filhas!';
  }
  
  getCor() {
    return this.cor;
  }
  
  setCor(novaCor) {
    this.cor = novaCor;
  }
  
  perimetro() {
    throw new Erro(this.mensagemErro);
  }
  
  area() {
    throw new Erro(this.mensagemErro);
  }
}

class Circulo extends Figura {
  constructor(cor, raio) {
    super(cor);
    this.raio = raio;
  }
  
  getRaio() {
    return this.raio;
  }
  
  setRaio(novoRaio) {
    this.raio = novoRaio;
  }
  
  perimetro() {
    return 2 * Math.PI * this.raio;
  }
  
  area() {
    return Math.PI * (this.raio ** 2);
  }
}

class Quadrado extends Figura {
  constructor(cor, lado) {
    super(cor);
    this.lado = lado;
  }
  
  getLado() {
    return this.lado;
  }
  
  setLado(novoLado) {
    this.lado = novoLado;
  }
  
  perimetro() {
    return 4 * this.lado;
  }
  
  area() {
    return this.lado ** 2;
  }
}

