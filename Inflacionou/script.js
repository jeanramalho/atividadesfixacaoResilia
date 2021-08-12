var nomeAlimento = prompt("Digite o nome do Alimento:")
var vlrAnterior = prompt("Digite o valor do alimento Semana Passada:")
var vlrAtual = prompt("Digite o valor do Alimento essa semana:")


if (vlrAnterior < vlrAtual) {
    var aumentou = vlrAtual - vlrAnterior
    alert(`O Alimento ${nomeAlimento} subiu ${aumentou} Reais`)
} 
else if (vlrAnterior > vlrAtual){
    var diminuiu = vlrAnterior - vlrAtual
    alert(`O Alimento ${nomeAlimento} diminuiu ${diminuiu} Reais`)
}
else {
    alert(`O Alimento ${nomeAlimento} manteve mesmo preço`)
}