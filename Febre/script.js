var temperaturaStr = prompt("Qual a temperatura do paciente?")
var temperatura = parseInt(temperaturaStr)

if (temperatura > 38) {
    alert("Paciente está com Febre")
} 
else if (temperatura < 34) {
    alert("Paciente está com Hipotermia")
}
else {
    alert("Paciente está com a temperatura normal")
    }