//Faça um algoritmo que leia 5 números inteiros e armazene-os num vetor. 
//Armazene  os números pares no vetor PARES e os números ímpares no vetor IMPARES. Exiba o conteúdo  dos 2 vetores.
let numeros = [2 ,3 ,4 ,5 ,8] 
let par = []
let impar = []
for(numero of numeros){
    if(numero %2 == 0){
        par.push(numero)
    } else{
        impar.push(numero)
    }
}
console.log(par)
console.log(impar)