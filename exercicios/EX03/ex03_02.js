// Peça ao usuario o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence
const prompt = require('prompt-sync')()
let anoN = Number(prompt("Em que ano você nasceu? "))
let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()
let idade = anoAtual - anoN

if (idade <= 10) {
    console.log('Você é uma criança!')
} else if (idade >= 11 && idade <= 17) {
    console.log('Você é um adolescente!')
} else if (idade >= 18 && idade <= 59) {
    console.log(`Você tem ${idade} anos e é um adulto!`)
} else {
    console.log(`Você tem ${idade} anos e é um idoso.`)
}