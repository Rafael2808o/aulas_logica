let frutas = ['Maçã', 'Banana', 'Uva', 'Abacaxi']
// A variável i serve para iterar os valores até o limite da lista
// O nome não é obrigatoriamente i, x ou contador
for(let i = 0; i < frutas.length; i++){
    // O lenght indentifica o tamanho total da lista
    console.log(`A fruta é ${frutas[i]}`)
}

let listaNomes = ['Bill Gates', 'Rafinha', 'Raul Saixas', 'Esteves', 'Vieira']
// Para cada nome da lista nomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}
// Verificando se é uma consoante ou uma vogal
// lista de vogais e consoantes
const prompt = require('prompt-sync')()
let vogal = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z']
let letras = prompt('Digite uma letra: ')
// Se letra estiver incluso na lista de vogais, identifico que é uma vogal

if(vogal.includes(letras.toLowerCase())){
    console.log('É uma vogal') 
} else if(consoantes.includes(letras.toLowerCase())){
    console.log('É uma consoante')
} else {
    console.log('Não é uma letra')
}

// Obtendo a posição do item
for(let[pos, fruta] of frutas.entries()){
    // entries retorma o par de cada elemento do vetor
    // Ou seja a posção é a fruta
    console.log(`Posição ${pos} e fruta ${fruta}`)
}

// Separando os item em uma lista
let produtos = 'Celular, Notebook, TV, Tablet, Headset'
// O split divide a string e forma uma lista a partir do limita no caso abaixo uma virgula
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto)
}

// Percorrendo uma string como uma lista (lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}