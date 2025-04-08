//Crie um programa que leia dois números e mostre a soma entre eles
const prompt = require('prompt-sync')()
let nr1 = Number(prompt("Digite um número: "))
let nr2 = Number(prompt("Digite um número: "))
let soma = nr1 + nr2
console.log(`A soma entre os números ${nr1} + ${nr2} é igual: ${soma}`)