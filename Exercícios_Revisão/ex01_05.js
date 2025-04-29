//Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra
//escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido.
const prompt = require('prompt-sync')()
let sexo = (prompt('Digite seu sexo (M/F): ')).toUpperCase()
switch(sexo){
    case 'M':
    console.log('Sexo masculino')
    break;
    case 'F':
    console.log('Sexo feminino')
    break;
    default:
    console.log('Sexo inválido')
}