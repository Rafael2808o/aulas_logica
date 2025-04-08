//Crie um programa que leia duas notas de um aluno, calcule e mostre sua média
const prompt = require('prompt-sync')()
let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let soma = nota1 + nota2
let media = soma / 2
console.log(`A média do aluno é ${media}`)