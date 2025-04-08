// Pede ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)
const prompt = require('prompt-sync')()
let anoN = Number(prompt("Em que ano você nasceu? "))
let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()

let idade = anoAtual - anoN

switch(true){
    case idade <= 10:
    console.log('Você é uma criança!')
        break
    case idade >= 11 && idade <= 17:
    console.log('Você é um adolescente!')
        break
    case idade >= 18 && idade <= 59:
    console.log(`Você tem ${idade} anos e é um adulto!`)
        break
    default:
    console.log(`Você tem ${idade} anos e é um idoso.`)
}
