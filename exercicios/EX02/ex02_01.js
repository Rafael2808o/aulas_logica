
// Leia 2 notas de um aluno, calcule a média e imprima aprovado ou reprovado (para ser aprovado a média deve ser no mínimo 7)
const prompt = require('prompt-sync')()

let notas1 = Number(prompt('Digite a primeira nota: '))
let notas2 = Number(prompt('Digite a segunda nota: '))

let media = (notas1 + notas2) / 2
console.clear()
if(media >= 7){
    console.log('Você foi aprovado')
}else{
    console.log('Você foi reprovado')
}
