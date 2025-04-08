//Para melhorar nosso desafio 01, vamos criar um novo calculando de forma real.
//Peça o salário do funcionário e calcule o valor do IRPF e INSS do funcionário e quanto ele irá
//receber no final do mês, considerando as seguintes tabelas e fórmulas:
//Para calcular o INSS é calculado sobre o valor bruto do salário
//Para calcular o IRPF é aplicado a tabela abaixo sobre o valor bruto menos o valor do INSS
const prompt = require('prompt-sync')()
let salario = Number(prompt('Qual o seu salário: '))

let inss = 0
let irpf = 0
let deducaoIRPF = 0


switch (true) {
  case (salario <= 1412.00):
    inss = salario
    
* 0.075
    break
  case (salario <= 2666.68):
    inss = 1412.00 * 0.075 + (salario - 1412.00) * 0.09
    break
  case (salario <= 4000.03):
    inss = 1412.00 * 0.075 + (2666.68 - 1412.00) * 0.09 + (salario - 2666.68) * 0.12
    break
  case (salario <= 7786.02):
    inss = 1412.00 * 0.075 + (2666.68 - 1412.00) * 0.09 + (4000.03 - 2666.68) * 0.12 + (salario - 4000.03) * 0.14
    break
  default:
    inss = 1412.00 * 0.075 + (2666.68 - 1412.00) * 0.09 + (4000.03 - 2666.68) * 0.12 + (7786.02 - 4000.03) * 0.14 + 908.85
}

let salarioBaseIRPF = salario - inss

switch (true) {
  case (salarioBaseIRPF <= 2259.20):
    irpf = 0
    deducaoIRPF = 0
    break
  case (salarioBaseIRPF <= 2826.65):
    irpf = salarioBaseIRPF * 0.075 - 169.44
    deducaoIRPF = 169.44
    break
  case (salarioBaseIRPF <= 3751.05):
    irpf = salarioBaseIRPF * 0.15 - 381.44
    deducaoIRPF = 381.44
    break
  case (salarioBaseIRPF <= 4664.68):
    irpf = salarioBaseIRPF * 0.225 - 662.77
    deducaoIRPF = 662.77
    break
  default:
    irpf = salarioBaseIRPF * 0.275 - 896.00
    deducaoIRPF = 896.00
}


let salarioFinal = salario - inss - irpf


console.log(`Salário Bruto: R$ ${salario.toFixed(2)}`)
console.log(`INSS: R$ ${inss.toFixed(2)}`)
console.log(`IRPF: R$ ${irpf.toFixed(2)}`)
console.log(`Salário Final: R$ ${salarioFinal.toFixed(2)}`)
