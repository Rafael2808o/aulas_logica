//Faça um algoritmo que receba o valor de uma dívida e mostre uma tabela com os  
// seguintes dados: valor da dívida, valor dos juros, 
// quantidade de parcelas e valor da parcela. Os  juros e a quantidade de parcelas seguem a tabela abaixo:  
const prompt = require('prompt-sync')()
let divida = Number(prompt('Digite o valor da dívida: '))
console.log (`1 parcela de R$${divida} é igual a R$0 de juros e com o valor total de R$${divida}`)
console.log (`3 parcela de R$${divida} é igual a 10% de juros e com o valor total de R$${((divida + (divida *10 / 100)) /3).toFixed(2)}`)
console.log (`6 parcela de R$${divida} é igual a 15% de juros e com o valor total de R$${((divida + (divida *15 / 100)) /6).toFixed(2)}`)
console.log (`9 parcela de R$${divida} é igual a 20% de juros e com o valor total de R$${((divida + (divida*20 / 100)) /9).toFixed(2)}`)
console.log (`12 parcela de R$${divida} é igual a 25% de juros e com o valor de cada parcela R$${((divida + (divida*25 / 100)) /12).toFixed(2)}`)