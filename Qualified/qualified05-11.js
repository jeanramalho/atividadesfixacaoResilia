//2
function hexStringToRGB(hexString) {
    let convert = hexString.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                ,(m, r, g, b) => '#' + r + r + g + g + b + b)
       .substring(1).match(/.{2}/g)
       .map(x => parseInt(x, 16))
      
       this.r = convert[0]
       this.g = convert[1]
       this.b = convert[2]
   
   
    return {r,g,b}
   }

//3
function findUniq(arr) {
  // do magic
   const map = new Map();

  for (const el of arr) {
    // Para cada elemento do array original, criamos um
    // registro no mapa `map` para determinar sua frequência:
    map.set(el, (map.get(el) || 0) + 1);
  }

  // Para cada elemento (sem repetição) do mapa, verificaremos
  // e retornaremos o primeiro único encontrado:
  for (const [entry, count] of map.entries()) {
    if (count === 1) return entry;
  }

  return undefined;
}

//4
function checagemTemperatura(temp) {
    if(temp >= 37) {
        return `${temp} - Febril`     
    }
     else if (temp < 37) {
      return `${temp} - Não Febril`
  }
    
  };
  module.exports = checagemTemperatura;

//5
const express = require("express");
const app = express();

app.get("/", (request, response) => {  
  res.sendStatus(404);  
});

app.get("/ano", (req,res) => {     
  res.json({'data': new Date().getFullYear()}) 
})

app.get("/mes", (req,res) => {     
  res.json({ data: new Date().getMonth()}) 
})

app.get("/dia", (req,res) => {    
  res.json({ data: new Date().getDay() }) 
})

module.exports = app; 