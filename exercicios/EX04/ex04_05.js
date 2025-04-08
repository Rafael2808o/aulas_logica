//Pede ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 7 aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
const prompt = require('prompt-sync')()
let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let media = (nota1 + nota2) / 2

switch(true){
    case media > 7:
    console.log(`Sua média é ${media} e você foi aprovado! `)
    break
    case media <= 7 && media >= 5:
    console.log(`Sua média é ${media} e você está de recuperação! `)
    break
    default:
    console.log(`Sua média é ${media} e você foi reprovado! `)
}