var gasStr = prompt("Quantos litros de Gasolina você tem no Tanque do Carro?")
var kmLiStr = prompt("Quantos Km seu carro faz por litro?")
var gas = parseInt(gasStr)
var kmLi = parseInt(kmLiStr)

function previsaoRodagem (gaso, kmlit) {
    var prev = gaso * kmlit
    alert(`Seu carro pode rodar até ${prev} quilometros`)
    return prev
}

previsaoRodagem(gas, kmLi)