//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um  algoritmo que 
///calcule seu peso ideal, utilizando as seguintes fórmulas:  
//Para homens: (72.7 * altura) – 58 Para mulheres: (62.1 * altura) - 44.7, exiba qual é o  peso ideal da pessoa. 
const prompt = require('prompt-sync')()
let sexo = (prompt('Qual seu sexo(M/F): ')).toUpperCase()
let altura = Number(prompt('Qual a sua altura: '))
if(sexo === 'M'){
    console.log(`Seu peso ideal é ${72.7 * altura - 58}`)
}else if(sexo === 'F'){
    console.log(`Seu peso ideal é ${62.1 * altura - 44.7}`)
}else{
    console.log('Sexo inválido')
}