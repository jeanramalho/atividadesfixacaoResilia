var iddStr = prompt("Qual a sua Idade?")
var idd = parseInt(iddStr)

function dirigirBeber (idade) {
    if (idade >= 18) {
        alert("Você ja pode Dirigir e Beber!")
    } 
    else {
        alert(`Você ainda tem ${idd} anos, não pode Dirigir nem Beber!`)
    }
 return idade   
    }

dirigirBeber(idd)