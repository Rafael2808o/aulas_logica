// Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
// escreva outra função que remova um elemento dessa lista global.

let listaNomes = []

function adicionarNome(nome){
    listaNomes.push(nome)
}

function removerNome(){
    listaNomes.pop()
}

function removerPorNome(nome){
    let posicao = listaNomes.indexOf(nome)
// Quando o idenOf não encontra o elemento ele retorna -1
    if(posicao != -1){
        listaNomes.splice(posicao, 1)
    }else{
        console.log('Nome não encontrado')
    }
}

adicionarNome('Ana')
adicionarNome('Mariana')
adicionarNome('Mateus')
console.log(listaNomes)
adicionarNome('Garro')
console.log(listaNomes)
removerNome()
console.log(listaNomes)
removerPorNome('Mateus')
console.log(listaNomes)