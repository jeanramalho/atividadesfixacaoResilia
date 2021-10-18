//2
select * from users where age >= 18;

//3
select * from travelers where country <> 'USA' and country <> 'Mexico' and country <> 'Canada'

//4
select idade, count(idade) as total_de_pessoas from pessoas group by idade having count(idade) >= 10

//5
module.exports = moedaSuficiente

function moedaSuficiente(moedas, total) {
  // Insira seu código aqui
  let vinteCinco = moedas[0] * 25
  let dez = moedas[1] * 10
  let cinco = moedas[2] * 5
  let um = moedas[3] * 1
  let soma = vinteCinco + dez + cinco + um
  
  
  if (soma/100 >= total) {
    return true
  } else {
    return false
  }
}
