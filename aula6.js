const prompt = require('prompt-sync')()

// operação com variaveis
let nr1 = Number(prompt("Digite um número: "))
let nr2 = Number(prompt("Digite um número: "))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

let multiplicacao = nr1 * nr2
console.log(`A multiplicação entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)

let subtracao = nr1 - nr2
console.log(`A subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

let exponenciacao = nr1 ** nr2
console.log(`A exponenciação entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

let divisao = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

let modulo = nr1 % nr2
console.log(`A sobra de divisão entre ${nr1} % ${nr2} é igual: ${modulo}`)

// Contrua um algoritmo que receba o valor do celular e o desconto e calcule seu novo valor
let valor = Number(prompt('Digite o preço do celular: '))
let Desconto = Number(prompt('Digite o preço do desconto: '))

valor = valor - Desconto
console.log(`O valor do celular com desconto R$${valor}`)

// Obtenha um número e calcule o dobro e a metade e exiba os valores
// Passo 1
let numero = Number(prompt('Digite o número: '))
// Passo 2
let dobro = numero * 2
// Passo 3
let metade = numero / 2
// Passo 4
console.log(`A metado do número é ${metade}`)
console.log(`O dobro do número é ${dobro}`)


let horas = Number(prompt('Digite as horas: '))
let dias = Number(prompt('Digite quantos dias de trabalhos será: '))
let Total = horas * dias
let valorHora = Number(prompt('Quanto eu recebo por R$/h: '))
let cobrar = valorHora * Total
console.log(`Custo final do projeto R$${cobrar}`)

