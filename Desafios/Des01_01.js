//Crie um programa que receba a temperatura (celsius) digitada pelo usuário e, com base no valor exiba uma mensagem classificando clima
const prompt = require('prompt-sync')()
let temperatura = Number(prompt('Digite a temperatura (Celsius): '))
if (temperatura < 15) {
    console.log ('O clima está frio')
} else if (temperatura >= 15 && temperatura <= 25){
    console.log ('O clima está agradável')
} else if (temperatura >= 26 && temperatura <= 35){
    console.log ('O clima está quente')
} else {
    console.log ('O clima está muito quente')
}