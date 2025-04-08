//Faça um algoritmo que leia o preço do produto e mostre seu novo preço com 5% de desconto
const prompt = require('prompt-sync')()
let preco = Number(prompt('Preço do produto: '))
let desconto = Number(prompt('Porcentagem de desconto: '))
let precoFinal = preco - (preco * desconto / 100)
console.log(`O preço do produto com o desconto é ${precoFinal}`)