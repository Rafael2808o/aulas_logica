//Crie um programa que leia quanto dinheiro a pessoa tem na carteira e mostre quantos dólares ela pode contar
const prompt = require('prompt-sync')()
let dinheiro = Number(prompt('Quanto dinheiro tem na carteira: '))
let dolar = Number(prompt('Digite quanto é 1 real em dolar: '))
let conversao = dinheiro * dolar
console.log(`Você pode contar ${conversao.toFixed(2)} doláres`)