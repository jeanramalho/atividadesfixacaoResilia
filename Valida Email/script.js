var email = prompt("digite seu email:")
var substr = "@"
var test = email.includes('@')

function validaEmail() {
    if ( test === true) {
        return true
    }
    else {
        return false
    }
}

validaEmail()

function exibeResultadoValidacao (resultado) {
    if (resultado === true) {
        document.write(`Email ${email} validado com sucesso`)
    }
    else {
        document.write(`${email} não é um email válido!`)
    }

    return resultado
}

exibeResultadoValidacao(validaEmail())