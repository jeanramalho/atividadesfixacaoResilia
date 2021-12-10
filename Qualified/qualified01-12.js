//2
const express = require("express");
const app = express();
app.use(express.json());

const db = {bdAdocao:[]};

app.get("/cachorros/:id", (req, res) => {
  const id = req.params.id -1
  const cachorro = db.bdAdocao[id]
  if(cachorro===undefined){
    res.send(404)
  }else{
  res.json(cachorro)
  }
});

app.post("/cachorros", (req, res) => {
    const cachorro = req.body
    db.bdAdocao.push(cachorro)
    res.json(cachorro)
});

module.exports = app;