var numerostr = prompt("Digite um numero:")
var numero = parseInt(numerostr)

function listaDecrescente (num) {
    while(num-- > 0) {
        alert(`seu numero é ${num}`)
    }

    return num
}

listaDecrescente(numero)