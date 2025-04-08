// Declarando um novo setor
// RECONHEÇO q é um vetor pelo uso dos colchetes
let listaVazia = []
console.log(listaVazia)
// Declarar uma lista de números
let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])
// Declaração de uma lista de strings
let nomes = ["Ana", "João", "Maria"]
console.log(nomes)

// Declaração de uma lista mista
let listaMista = [1, "dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ["coca-cola", "Cachorro-Quente"],
    [5.0, 10.0]
]
console.log(listaComLista)
// Alterando valores da lista
let frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas)
frutas.push('Laranja')
console.log(frutas)
// O spread adciona um novo elemento no vetor
frutas = [...frutas, 'Banana']
console.log(frutas)

frutas.splice(2, 0, 'Morango')
console.log(frutas)

// Excluindo item na lista
frutas.splice(3,1) // Excluindo item pelo indice
console.log(frutas)
frutas.shift() // Excluindo primeiro item na lista
frutas.pop() // Excluir ultimo item da lista
console.log(frutas)

// Acessar os itens da lista
console.log(frutas[3]) // Acesso a partir de uma posição especifica
console.log(frutas.slice(0,4)) // Posição 0 até 4
console.log(frutas.slice(1)) // A partir da pos1ção 1
console.log(frutas.slice(-1)) // Mostra os itens do fim para o inicio
console.log(frutas.length) // Total de itens na lista

// Ordenar itens da lista
console.log(frutas)
frutas.sort() // Ordenar a lista de forma crescente
console.log(frutas)
frutas.reverse() // Ordenando de forma decrescente
console.log(frutas)