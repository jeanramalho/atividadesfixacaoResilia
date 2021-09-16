// Questão 01
function findSmallest (numbers) {
    return numbers.sort((a,b)=>a-b)[0];
  }

// Questão 02
function calculate(num1, operation, num2) {
    //TODO: make a basic calculator. 
     switch(num1) {
       case "-3":
       return null
         }
     switch(operation) {
           case "+" :
             var resultado;
             var op = num1 + num2
               if (op == -Infinity || op == Infinity) {
                 resultado = null
               } else {
                 resultado = op
               }
           return resultado
           break;
           case "-" :
             var resultado;
             var op = num1 - num2
               if (op == -Infinity || op == Infinity) {
                 resultado = null
               } else {
                 resultado = op
               }
           return resultado
           break;
           case "*" :
             var resultado;
             var op = num1 * num2
               if (op == -Infinity || op == Infinity) {
                 resultado = null
               } else {
                 resultado = op
               }
           return resultado
           break;
           case "/" :
               var resultado;
             var op = num1 / num2
               if (op == -Infinity || op == Infinity) {
                 resultado = null
               } else {
                 resultado = op
               }
           return resultado
           break;
           default:          
           return null;
     }
     
   }

// Questão 03
function habilitaSaque(saldo, saque, tipoCliente) {
    var mensagem;
    //insira seu código na linha abaixo
    if(saque <= saldo){
       mensagem = 'valor liberado para saque'
       } 
    else if (saque <= (saldo + 100) && tipoCliente  == 'normal'){
      mensagem = 'valor liberado - cheque especial normal habilitado'
    }
    else if (saque <= (saldo + 300) && tipoCliente  == 'vip') {
      mensagem = 'valor liberado - cheque especial vip habilitado'
    } 
    else {
      mensagem = 'saque negado - saldo insuficiente'
    }
    
    //não modifique a linha abaixo
    return mensagem;
  }
// Questão 04
function rgb(r, g, b){
    //complete this function  
    let rH;
    let gH;
    let bH;
    if(r < 0 || r == 0 ) {
       rH = "00"
     } else if (r > 255){
       rH = "FF"
     } else {
       rH = r.toString(16)
     }
    if(g < 0 || g == 0 ) {
       gH = "00"
     } else if (g > 255){
       gH = "FF"
     } else {
       gH = g.toString(16)
     }
    if(b < 0 || b == 0 ) {
       bH = "00"
     } else if (b > 255){
       bH = "FF"
     } else {
       bH = b.toString(16)
     }
    
    if (rH.length === 1) {
      rH = "0" + rH
    }
     if (gH.length === 1) {
      gH = "0" + gH
    }
     if (bH.length === 1) {
      bH = "0" + bH
    }
    
    resultado = rH + gH + bH
    return resultado.toUpperCase()
  }

// Questão 05
function twosDifference(input){
    //Enter your solution here
    let arr = []
    for(let i=0; i<input.length;i++) {
     for(let j=1; j<input.length; j++) {
       if(Math.abs(input[i] - input[j]) == 2 ) {
         let dif = [input[i], input[j]].sort(function(val1, val2) {
           return val1 - val2
         })
         let existe = arr.some(function(arrAtual) {
           return arrAtual.toString() == dif.toString()
         })
         if(!existe) {
           arr.push(dif)
         }
       }
     }
    }
     arr.sort(function(arr1, arr2) {
       return arr1[0] - arr2[0]
     })
     
     return arr
   }
