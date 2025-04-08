// Peça o salário do funcionário e calcule o valor do IRPF e INSS do funcionário e quanto ele irá
//receber ofinal do mês, considerando a seguinte tabela:
const prompt = require('prompt-sync')()
let salario = Number(prompt('Qual o seu salário: '))

switch(true){
    case salario <= 2259.20:
    console.log(`Você irá receber de IRPF mais o salário no final do mês ${salario + (salario * 0 / 100)}`)
    break
    case salario <= 2826.65:
    console.log(`Você irá receber de IRPF mais o salário no final do mês ${salario + (salario * 7.5 / 100)}`)
    break
    case salario <= 3751.05:
    console.log(`Você irá receber de IRPF mais o salário no final do mês ${salario + (salario * 15 / 100)}`)
    break
    case salario <= 4664.68:
    console.log(`Você irá receber de IRPF mais o salário no final do mês ${salario + (salario * 22.5 / 100)}`)
    break
    default:
    console.log(`Você irá receber de IRPF mais o salário no final do mês ${salario + (salario * 27.5 / 100)}`)
}
switch(true){
    case salario <= 1412.00:
    console.log(`Você irá receber de INSS mais o salário no final do mês ${salario + (salario * 7.5 / 100)}`)
    break
    case salario <= 2666.68:
    console.log(`Você irá receber de INSS mais o salário no final do mês ${salario + (salario * 9 / 100)}`)
    break
    case salario <= 4000.03:
    console.log(`Você irá receber de INSS mais o salário no final do mês ${salario + (salario * 12 / 100)}`)
    break
    case salario <= 7786.02:
    console.log(`Você irá receber de INSS mais o salário no final do mês ${salario + (salario * 14 / 100)}`)
    break
    default:
    console.log(`Você irá receber de INSS mais o salário no final do mês ${salario + 908.85.toFixed(2)}`)
}