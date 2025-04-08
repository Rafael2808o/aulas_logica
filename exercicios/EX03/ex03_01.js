// Peça ao usuário para digitaar um número de 1 a 7 e imprime o dia da semana correspondente
const prompt = require('prompt-sync')()
let nmr = Number(prompt('Digite um número de 1 a 7: '))
if (nmr == 1) {
    console.log('Corresponde à domingo')
}
else if (nmr == 2) {
    console.log('Corresponde à segunda')
}else if (nmr == 3) {
    console.log('Corresponde à terça')
}else if (nmr == 4) {
    console.log('Corresponde à quarta')
}else if (nmr == 5) {
    console.log('Corresponde à quinta')
}else if (nmr == 6) {
    console.log('Corresponde à sexta')
}else if (nmr == 7) {
    console.log('Corresponde à sabádo')
} else {
    console.log(`O número ${nmr} nao corresponde com um dia da semana`)
}