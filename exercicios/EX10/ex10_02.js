//Crie um algoritmo que receba em variável global o valor atual do dólar e do euro, crie uma
//função que receba o valor a ser convertido e imprima a conversão em dólar e em euro

let cotacaoDolar = 5.65
let cotacaoEuro = 6.64

function converterMoeda(valorReais){
    let valorEmDolar = valorReais / cotacaoDolar
    let valorEmEuro = valorReais / cotacaoEuro

console.log(`R$ ${valorReais.toFixed(2)} equivale a:`)
console.log(`US$ ${valorEmDolar.toFixed(2)}`)
console.log(`E ${valorEmEuro.toFixed(2)}`)
}
converterMoeda(100)
converterMoeda(50)
converterMoeda(10)