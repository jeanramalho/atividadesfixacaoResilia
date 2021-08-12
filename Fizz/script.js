function fizz (numeroMaximo) {
    var contador = 0

    var texto = ""

    while(numeroMaximo >= contador) {
        if (contador % 3 == 0) {
            texto += `Fizz\n`
        }
        else {
            texto += `${contador}\n`
        }
        contador++
    }

    return texto
}

var numero = prompt("Digite um Número:")
var numeroInt = parseInt(numero)

console.log(fizz(numero))