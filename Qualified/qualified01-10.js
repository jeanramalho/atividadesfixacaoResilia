//2
module.exports = function encrypt(mensagem) {
    //insira aqui sua solução
      let substituicoes = {'a':'4', 'e':'3', 'i':'2', 'o':'1', 'u':'0' }
      
      let output = ''
      
      for (let i = mensagem.length - 1; i >= 0; i--) {
        let char = mensagem[i]
        output += substituicoes[char] || char
      }
      return output + 'ece'
    }

//3
module.exports = contaNucleotideos;

/*
Dada uma cadeia de DNA, cria um histograma dos nucleotídeos.
## Exemplos:

contaNucleotideos('AATAA')
> {'A': 4, 'T': 1, 'C': 0, 'G': 0}
*/
function contaNucleotideos(stringDNA) {
  // Implemente sua solução aqui...
  let DNA = {}
  
  DNA.A= stringDNA.split("A").length - 1
  DNA.C= stringDNA.split("C").length - 1
  DNA.G= stringDNA.split("G").length - 1
  DNA.T= stringDNA.split("T").length - 1

return DNA

}

//4
module.exports = function uncensor(message, key) {
    // Implemente sua solução aqui...  
      let cont = 0
      let newMsg = ''
    for (let i = 0; i<message.length; i++){
      if (message.charAt(i) == '*')  {
          if (key.charAt(cont) == '') {
          newMsg += message.charAt(i)
  } else {
      newMsg += key.charAt(cont++)
  }
  }else {
  newMsg += message.charAt(i)
  }
  } 
   return newMsg 
  }