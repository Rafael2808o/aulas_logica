//Criando nossa primeira função
const prompt = require('prompt-sync')()
function Cabecalho(texto){
    console.log('---------------------------')
    console.log(       texto)
    console.log('---------------------------')
}
// Criando outra função, função de saudação
function Saudacao(){
    let nome = prompt('Digite seu nome: ')
    console.log(`${nome} tenha um bom dia!`)
}


// Chamando a função
// Passando o parâmetro junto com a função
Cabecalho('SESI/SENAI')
// Posso declarar uma variavel e passa-la como parâmetro para uma função
let escola = ('SESI-025')
Cabecalho(escola)
Saudacao()

// Criei a função soma q irá receber dois valores como parâmetro a partir desses valores
// realizara o calculo e mostrara o resultado
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
soma(28, 23)
soma(2, 5)

soma(2008, 2008)

function ParImpar(nmr){
    if(nmr %2 == 0){
        console.log(`O número ${nmr} é par`)
    } else {
        console.log(`O número ${nmr} é impar`)
    }

}
ParImpar(4)
ParImpar(5)
// Função com retorno do resultado
// O cálculo é realizado e é retornada para a chamada da função
function media(nb1, nb2){
    let md = (nb1 + nb2) /2
    return(md)
}

console.log(media(10,8))
// Armazenei o retorno da função em uma variável 
let valor  = media(8,7)
// Utilizei o retorno da função para escrever na tela
console.log(valor)
// Utilizei a variável que recebeu o retorno da função para
// Chamar a função Par ou Impar passando o valor como parâmetro
ParImpar(valor)