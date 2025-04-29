//Faça um Programa que pergunte quanto você ganha por hora e o número de horas  trabalhadas no mês. Calcule e mostre
//  o total do seu salário no referido mês, sabendo-se que  
// são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, 
// faça  um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. 
// o  salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo: 
//+ Salário Bruto: R$ 
//- IR (11%): R$ 
//- INSS (8%): R$ 
//- Sindicato (5%): R$ 
//= Salário Liquido: R$ 
//Obs.: Salário Bruto - Descontos = Salário Líquido.
const prompt = require('prompt-sync')()
let GanhoPorHora = Number(prompt('Quanto você ganha por Hora: '))
let NumerosDeHorasTrabalhadas = Number(prompt('Quantas horas você trabalhou no mês: '))

let salario = GanhoPorHora * NumerosDeHorasTrabalhadas


let impostoDeRenda = salario * 11 / 100
let INSS = salario * 8 / 100
let Sindicato = salario * 5 / 100

console.log(`o valor da porcentagem do imposto de renda que foi tirado do seu salario foi de: ${impostoDeRenda}`);
console.log(`o valor da porcentagem do INSS que foi tirado do seu salario foi de: ${INSS}`);
console.log(`o valor da porcentagem do Sindicato que foi tirado do seu salario foi de: ${Sindicato}`);



