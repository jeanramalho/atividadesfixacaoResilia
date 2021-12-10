// 1
const express = require("express");
const app = express();

app.use(express.json())

app.get("/contagem/:str", (req, res) => {
const countChars = (str) => {
  const count = {};  
  for (const char of str) {
    count[char] = count[char] ? ++count[char] : 1;
  }  
  return count;
}
res.json(countChars(req.params.str))
})
module.exports = app; 

//2
const express = require("express");
const app = express();
app.use(express.json())

app.get("/segundos/:valor", (req, res) => {
  const valor = req.params.valor
  const horas = Math.floor(valor/3600)
  const minutos = Math.floor((valor%3600)/60)
  const segundos = (valor%3600)%60
  res.json({
    "horas": horas,
    "minutos": minutos,
    "segundos": segundos
  });
});

module.exports = app;


//3
SELECT t1.* FROM funcionarios as t1
inner join (Select area_atuacao, SUM(salario)/COUNT(id) as media from funcionarios group by area_atuacao) as t2 ON t1.area_atuacao = t2.area_atuacao where t1.salario > t2.media


//4
SELECT t1.* FROM funcionarios as t1
inner join (Select area_atuacao, Min(salario)  as minimo from funcionarios group by area_atuacao) as t2 ON t1.area_atuacao = t2.area_atuacao where t1.salario = t2.minimo