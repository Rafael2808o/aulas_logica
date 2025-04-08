// Peça o salário do funcionário, e calcular o aumento que ele terá, considerando se ganhar até
//2000, reajuste de 12%, até 4000, reajuste de 10%, acima de 4000 reajuste de 8%, exibir o
//novo salário
const prompt = require('prompt-sync')()
let salario = Number(prompt('Qual o seu salário? '))
if (salario <= 2000) {
    console.log(`Você irá receber ${salario + (salario * 12 / 100 )} de salário`)
} else if (salario >2000 && salario <= 4000) {
    console.log(`Você irá receber ${salario + (salario * 10 / 100 )} de salário`)
} else {
    console.log(`Você irá receber ${salario + (salario * 8 / 100 )} de salário`)
}