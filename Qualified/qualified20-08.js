//1
function abrevNome(nome) {
  
    var nomeSobrenome = nome.split(" ")
    var str = ""
    
    for (var i=0;i<nomeSobrenome.length;i++) {
      if(i==0){
        str = str+nomeSobrenome[i].charAt(0).toUpperCase()
        }
      else str = str+"."+nomeSobrenome[i].charAt(0).toUpperCase()
    }
    
    return str
   }

//2
function filtroAmigo(arr) {
    var amigosParaSempre = []
    for(var i=0;i<arr.length;i++) {
      if(arr[i].length == 4) {
        amigosParaSempre.push(arr[i])
      }
     }
    return amigosParaSempre
  }

//3
function arrayMaisArray(arr1, arr2) {
    var soma1 = 0
    var soma2 = 0
    
    for(var i = 0; i<arr1.length; i++) {
      var j = arr1[i]
      soma1 = soma1 + j 
    }
    for(var k = 0; k<arr2.length; k++) {
      var l = arr2[k]
      soma2 = soma2 + l 
    }
    
    return soma1 + soma2; 
  }

//4
function fizzBuzz (num) {
    var resultado = []
    
  for ( var i = 1; i <= num; i++) {
    
    
      if ( i % 3 === 0) {
          if (i % 5 === 0) {
              resultado.push("FizzBuzz");
          } else {
              resultado.push("Fizz");
          }
      } else if (i % 5 === 0) {
          resultado.push("Buzz");
  
      } else {
          resultado.push(i);
      }
  }
    return resultado
  }

//5
function trianguloInvertido (num) {
    var arr = ""
    for (var i = num; i>0; i--) {
      arr = arr + '*'.repeat(i) + "\n"
      
    }
    return arr
  }