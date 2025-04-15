// Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’, faça a separação desses itens para
// uma lista e exiba o item e a posição que ele está.
const prompt = require('prompt-sync')()
let texto = 'Gol;Corsa;Palio;Monza;Fusca;'
let lista = texto.split(';')
lista.pop()
for (let[posicao, carro] of lista.entries()) {
    console.log(`Posição ${posicao}: ${carro}`)
}
