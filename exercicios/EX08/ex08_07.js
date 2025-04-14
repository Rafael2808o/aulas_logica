// Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’, faça a separação desses itens para
// uma lista e exiba o item e a posição que ele está.
const prompt = require('prompt-sync')()
let texto = 'Gol;Corsa;Palio;Monza;Fusca;'
let lista = []
let palavra = ''

for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== ';') {
        palavra += texto[i]
    } else {
        lista.push(palavra)
        palavra = ''
    }
}

for (let i = 0; i < lista.length; i++) {
    console.log("Posição:", i, "Carro:", lista[i])
}
