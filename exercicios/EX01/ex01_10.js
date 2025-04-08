//Faça um algoritmo que pergunte a quantidade de km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0.15 por km rodado
const prompt = require('prompt-sync')()
let km = Number(prompt('Quantos km foram percorridos no total: '))
let dias = Number(prompt('Por quantos dias o carro foi alugado: '))
let precoFinal = (60 * dias) + (0.15 * km)
console.log(`Preço a pagar R$${precoFinal.toFixed(2)}`)