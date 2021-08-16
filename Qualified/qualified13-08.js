//questão 1
function areaOuPerimetro(lado1,lado2) {
    var areaQuad = lado1 * lado2
    var periRet = (lado1 + lado1) + (lado2 + lado2)
    
    if(lado1 == lado2)
      {
        return areaQuad
      } else
      {
        return periRet
      }
  }


  //questão 2
  function acumular (num) {
    //Insira seu código aqui!
    var count = 1
    var soma = 0
    while(count <= num){
      soma = soma + count  
      count++
    }
    return soma
  }


  //questão 3
  function filterArr(arr) {
    // Retorne um array sem as strings presentes em arr
    var count = 0
    var numberList = []
    
    while(count < arr.length) {
      var newArr = arr[count]
      
      if(typeof(newArr) == 'number') {
          numberList.push(arr[count])
      } 
      count++
    }
    return numberList
  }



  //questão 4
  function contaCarneirinhos(carneirinho) {
  
    var count = 0
    var numCarneirinhos = 0
    
    while (count <= carneirinho.length) {
      if (carneirinho[count]) {
        numCarneirinhos++
      }
      count++
    }
    
    
    return numCarneirinhos 
  }


  //questão 5
  //retorne o número de sorrisos válidos presentes em arr
function contaSorrisos(arr) {
    var countSorrisos = 0
    var resultado = 0
    
    while (arr.length > countSorrisos) {
     if (arr[countSorrisos].includes(")") || arr[countSorrisos].includes("D")) {
       if (arr[countSorrisos].includes(":") || arr[countSorrisos].includes(";")) {
         resultado++
       }
     }
       countSorrisos++
      
     }
       
    
   return resultado
  }


  //questão 6
  function oposto (num) {
    var numOposto = 0 - num
    
    return numOposto
  }


  //questão 7
  function separaEInverte(numero) {
    //insira aqui seu código
    var separador = []
    var transforma = numero.toString()
    var count = 0
    
    while (count < transforma.length) {
      separador.push(parseInt(transforma[count]))
      count++
    }
    
    separador.reverse()
    return separador
    
  }

  //questão 8
  function  maiorEMenor(nomeros) {
    var separador = nomeros.split(" ")
    var num = separador.map(Number)
    var count = 1
    var maiorNum = num[0]
    var menorNum = num[0]
    
    while(count < num.length) {
      if(num[count] < menorNum) {
        menorNum = num[count]
      }
      if(num[count] > maiorNum) {
        maiorNum = num[count]
      }
      count++    
    }
    var result = maiorNum + " " + menorNum
    
    return result
  }
