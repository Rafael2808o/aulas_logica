//Crie um programa que leia um número inteiro e mostre na tela o seu sucessor e antecessor
const prompt = require('prompt-sync')()
let nmr = parseInt(prompt('Digite o número: '))
let Antecessor = nmr - 1
let Sucessor = nmr + 1
console.log(`O antecessor do número ${nmr} é ${Antecessor} e o sucessor é ${Sucessor}`)
