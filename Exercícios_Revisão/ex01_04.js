// Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas
//trabalhadas no mês. Calcule em uma nova variável e mostre o total do seu salário no referido
// mês.
const prompt = require('prompt-sync')()
let ganhaH = Number(prompt('Quanto você ganha por horas: '))
let horaT = Number(prompt('Quantas horas você trabalha no mês: '))
console.log(`Seu salário é igual a ${ganhaH * horaT}`)