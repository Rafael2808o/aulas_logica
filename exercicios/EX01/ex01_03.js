// Crie um programa que leia um número e mostre o seu dobro, triplo e o valor dele elevado ao cubo
const prompt = require('prompt-sync')()
let nmr = Number(prompt("Digite um número: "))
let dobro = nmr * 2
let triplo = nmr * 3
let cubo = nmr ** 3
console.log(`O dobro do número ${nmr} é ${dobro}, o triplo é ${triplo} e o número elevado ao cubo ${cubo}`)