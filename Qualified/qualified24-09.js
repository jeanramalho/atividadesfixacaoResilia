//1
const devsBR = (devsArr) => {
    //insira aqui seu código
   
   const filterItems = devsArr.filter(escolhido => escolhido.language == 'JavaScript' && escolhido.country=='Brazil')
   return filterItems
};

//2
class Televisao
{
  constructor (tamanho, marca, preco) {
    this.validacao (tamanho, marca, preco)
    this.tamanho = tamanho
    this.marca = marca
    this.preco = preco
    
  }
  validacao (tamanho,marca,preco){
    if (typeof tamanho != 'number'){
      throw new TypeError("Tamanho inválido")
    }
    if (!["Phillips", "LG", "TLC", "Sony"].includes(marca)){
      throw new TypeError ("Marca inválida")
    }
    if (typeof preco != 'number'){
      throw new TypeError ("Preço inválido")
    }
  }
  getTamanho(tamanho){
    return this.tamanho
  }
  getMarca(marca){
    return this.marca
  }
  getPreco (preco){
    return this.preco
  }
}

class TelevisaoView
{
  
  renderizar (model){
    return `<div>
  <p><span class='size'>${model.tamanho}</span></p>
  <p>${model.marca}</p>
  <p>${model.preco}</p>
<div>`
  }
}

//3
function maioresQue5Invertido(num) {
    let arr = num.toString()
    arr = arr.split("")
    let arr2 = []
    for (let i = 0; i<arr.length; i++){
      if(arr[i]>5){
        arr2.push(arr[i])
      }
      
    }
    let result = arr2.reverse().join("")
    result = +result
    if (arr2.length == 0){
      result = null
    }
    
    return result
  }

//4
class Arr {
    constructor(...elementos) {
      this._arr = [...elementos];
    }
  
    adiciona(...elementos) {
      this._arr = [...this._arr, ...elementos]
    }
    
    getArr() {
      return this._arr;
    }
    
    map(callback){
      return this._arr.map(callback)
    }
    filter(callback){
      return this._arr.filter(callback)
    }
    
  }