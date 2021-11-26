//1
// html
<!DOCTYPE html>
<html>
<head>
  <title>Click Counter</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
  <div id="app">
    
    TODO (see instructions)
 <h1 id="counter" class="counter">0</h1>
     <button id="increment" class="increment">increment</button>
     <button id="decrement" class="decrement">decrement</button>
    
  </div>
  <script src="src/index.js"></script>
</body>
</html>

//JS
import "./style.css";

// TODO (see instructions)
   let counter = document.getElementById('counter')
let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')
let novoContador = 0
let contador = ''

increment.addEventListener('click',()=>{
  novoContador += 1
  contador = `${novoContador}`
  console.log(novoContador)
  counter.innerHTML = contador
  
})

decrement.addEventListener('click', ()=>{
  novoContador -= 1
  contador = `${novoContador}`
  console.log(novoContador)
  counter.innerHTML = contador
})


//2
const express = require('express');
const app = express();

app.use(express.json());

const caesarCipherEnconder = (normalText, key=1) => {
  normalText = normalText.split('');
  let encodedText = '';

  for (let i = 0; i < normalText.length; i++) {
    const currentCharCode = normalText[i].charCodeAt();
    
    if (currentCharCode >= 97 && currentCharCode <= 122)
      encodedText += String.fromCharCode((currentCharCode - 97 + key) % 26 + 97);
    else if (currentCharCode >= 65 && currentCharCode <= 90)
      encodedText += String.fromCharCode((currentCharCode - 65 + key) % 26 + 65);
    else
      encodedText += normalText[i];
  }

  return encodedText;
}

app.post('/cifrar', (req, res) => {
  const body = req.body;
  
  const encodedMsg = caesarCipherEnconder(body.mensagem, body.passos);
  
  res.json({ resposta: encodedMsg });
});

module.exports = app; 

//3
const express = require('express');
const app = express();

app.use(express.json());

class Dice {
  constructor(type) {
    this.type = type;
  }
  
  roll() {
    const max = Math.floor(this.type);
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
  }
  
  rollN(nRolls) {
    const rollsResult = [];
    
    for (let i = 0; i < nRolls; i++) {
      rollsResult.push(this.roll());
    }
    
    return rollsResult;
  }
}

app.post('/rolar-dados', (req, res) => {
  const body = req.body;
  
  const dice = new Dice(body.dado);
  const arrRolls = dice.rollN(body.rolagens);
  
  res.json({ resultados: arrRolls });
});

module.exports = app; 

//4
INSERT INTO participants
VALUES
  ('Jean Ramalho', 29, TRUE)
;

SELECT * FROM participants;

//5
-- Crie sua query aqui
SELECT
  p.*,
  COUNT(*) quantidade_brinquedos
FROM pessoas p
INNER JOIN brinquedos b
  ON p.id = b.pessoas_id
GROUP BY p.id, p.nome;