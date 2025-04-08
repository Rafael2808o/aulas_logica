// IMC
const prompt = require('prompt-sync')()
let altura = Number(prompt('Digite sua altura: '))
let peso = Number(prompt('Digite seu peso: '))
let imc = peso / (altura ** 2)
if (imc < 18.5) {
    console.log('Abaixo do peso ideal!')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso ideal!')
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso')
} else {
    console.log('Obesidade')
}

// Verificar se o triangulho é equilátero ou escaleno
// Receber o lado 1
let lado1 = Number(prompt('Digite o valor do lado 1: '))
let lado2 = Number(prompt('Digite o valor do lado 2: '))
let lado3 = Number(prompt('Digite o valor do lado 3: '))

// Verificar se o triangulo é equilátero caso tenha todos os lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log('Triangulo Equilátero ?', eq, 'Triangulo Escaleno ?', es)

if (lado1 == lado2 && lado2 == lado3) {
    console.log ('É um triangulo equilátero!')
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log('É um triangulho escaleno')
} else {
    console.log('É um triangulo isóceles')
}

// Descobrir a quantidade de horas trabalhadas
let horas = Number(prompt('Total de horas trabalhadas: '))
// Descobrir o valor das vendas
let vendas = Number(prompt('Total de vendas: '))
// Validar se uma das condições foi atendidas (mais de 5000 mil em vendas ou mais de 40 horas trabalhadas)
if (vendas > 5000 || horas > 40){
    console.log('Tem direito ao bônus!')
} else{
    console.log('Não tem direito ao bônus!')
}


// Crie um algoritmo q receba um caractere e verifique se ele é um vogal ou uma consoante
let caractere = prompt('Digite o Caractere: ')
if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
    console.log(`A letra ${caractere} uma vogal!`)
} else {
    console.log(`A letra ${caractere} consoante!`)
}