//1
const express = require("express");
const app = express();
const https = require('https');

app.get("/consultar/:cod", (request, response) => {
  const cod = request.params.cod;
  https.get(`https://restcountries.com/v2/callingcode/${cod}`, (res)=>{
    res.setEncoding ("utf8");
    let datas = '';
    res.on("data", (chunk)=>{
      return datas+= chunk

    })
    res.on('end', ()=>{
      const date = JSON.parse(datas)
      response.status(200).json({"sigla": date[0].alpha2Code})
    })
  })
});

module.exports = app;


//2
select clientes.id as cliente_id, clientes.nome as nome_cliente 
from clientes left join pedidos 
on clientes.id = pedidos.cliente_id 
where pedidos.cliente_id is null

//3
const express = require("express");
const app = express();
const https = require('https')

app.get("/cor/:cod", (request, response) => {
  const cod = request.params.cod;
  https.get(`https://www.thecolorapi.com/id?hex=${cod}`, (res)=>{
    
    res.setEncoding ("utf8");
    let datas = '';
    res.on("data", (chunk)=>{
      return datas += chunk
    })
    res.on('end', ()=>{
     const date = JSON.parse(datas)
     response.status(200).json(
     {"rgb": date.rgb.value, "cmyk": date.cmyk.value})
    })
  })
});

module.exports = app; 


//4
select id, nome, salario 
from funcionarios 
where salario > (select salario from funcionarios where id = 30 )