// Importano a bibliotexa para entrada de dados
const prompt = require('prompt-sync')()

// Variaveis e constantes
// Passo 1: Receber o nome da pessoa
let nome = 'Borba'
// Passo 2: Receber a idade da pessoa
let idade = 17
// Passo 3: Receber o peso da pessoa
let peso = 50
// Passo 4: Exibir o nome, a idade e o peso
console.log (nome, idade, peso)
console.log ('nome', 'idade', 'peso')

// REceber e armazena o texto em uma variavel
    let curso =     "Desenvolvimento de Sistemas"
// #tipo   nome   recebe   valor    na variavel

// Exibir o valor armazenado
console.log("curso") // Imprimo uma string(texto)
console.log(curso) // Imprimo o valor q está dentro da variavel
console.log("curso", curso)

// Criando e atribuindo valor a outras variaveis 
let idade2 = 16 // Valor do tipo Int (inteiro)
let temperatura = 15.5 // Valor do tipo float 0
let nome2 = "Mari"

console.log("Olá", nome2, "voce tem:", idade2, "e hoje está fazendo", temperatura, "ºC")

// Usando template string
console.log(`Olá ${nome2}, você tem ${idade2} e hoje está fazendo: ${temperatura}ºC`)
  
   let chovendo = false
   let dia = true
    // As contantes não podem ser reatribuidos novos valores
   const PI = 3.1415
   console.log (PI)

   // Utilizando prompt para receber dados
// Entrada de dados

// No prompt sempre recebemos uma string
nome = prompt('Digite seu nome:  ')
idade = parseInt(prompt('Digite sua idade:  '))
peso = parseFloat(prompt('Digite seu peso:  '))
let altura = 1.53
console.log(`Seu nome é ${nome}, voce tem ${idade} anos e pesa ${peso}`)
// Valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
// Apos a conversao dos valores é possivel realizar
// Calculos matematicos
console.log(idade + peso)

