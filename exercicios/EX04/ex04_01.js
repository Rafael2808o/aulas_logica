//Pede ao usuário para digitar um número de 1 a 7 e imprime o dia da semana correspondente
const prompt = require('prompt-sync')()
let nmr = Number(prompt('Digite um número de 1 a 7: '))
switch(true){
    case nmr == 1:
        console.log('Corresponde à domingo')
        break
    case nmr == 2:
        console.log('Corresponde à segunda')
        break
    case nmr == 3:
        console.log('Corresponde à terça')
        break
    case nmr == 4:
        console.log('Corresponde à quarta')
        break
    case nmr == 5:
        console.log('Corresponde à quinta')
        break
    case nmr == 6:
        console.log('Corresponde à sexta')
        break
    case nmr == 7:
        console.log('Corresponde à sábado')
        break
}