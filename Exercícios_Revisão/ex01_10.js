// Faça uma função que receba dois números inteiros como parâmetro e gere os  
// números inteiros que estão no intervalo compreendido por eles. 
const prompt = require('prompt-sync')()

function faixa(n1,n2){
    for(n1; n1 <= n2; n1++){
        console.log(n1)
    }
    
}
faixa(2,5)