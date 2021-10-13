// 02
module.exports = separa;

function separa(str) {
  // Insira seu código aqui...
let newStr = ''
let strUp = '' 
let newStrlow = ''

for (let i=0; i<str.length; i++) {
    strUp = str[i].toUpperCase()
    if (str[i] == strUp) {
    newStr += str[i]
} else {
    newStrlow += str[i] 
}
} 
return newStr +  newStrlow 
}

//03
function removeMinimum(numbers) {
    // Insira seu código aqui
    let numbers2 = numbers.slice()
    let num = []
    let menor = Math.min(...numbers2)
      console.log(menor)
  if (numbers.length === 0) {
    return numbers
  } 
  else {
      for (let i=0; i<numbers2.length; i++) {
        if (numbers2[i] == menor) {
          numbers2.splice(i,1)
          return numbers2
        
      }
  }
  
  }
  
  }