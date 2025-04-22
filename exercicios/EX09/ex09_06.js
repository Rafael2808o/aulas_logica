//Crie uma função que gere uma senha aleatória, deve receber como parâmetro a
//quantidade de caracteres que terá a senha, crie uma lista com todos os caracteres disponíveis
//para a senha e com o random sorteie a qual de dígitos terá a senha
const prompt = require('prompt-sync')()
function senha(qc) {
    let senhaGerada = ''
    let lista = ['m', 'b', 'r', 's', 'a', '8', '3', '2', '*']

    for (let i = 0; i < qc; i++) {
        let aleatorio = Math.floor(Math.random() * lista.length)
        senhaGerada += lista[aleatorio]
    }

    console.log(`Senha gerada: ${senhaGerada}`)
}

senha(8)
