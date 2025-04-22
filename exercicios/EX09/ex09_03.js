//Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
//10, chame essa função por 3 vezes enviando parâmetros diferentes
function multiplicacao(nmr) {
    console.log(`Tabuada do ${nmr}:`)
    for(let i = 0; i <= 10; i++) {
        console.log(`${nmr} x ${i} = ${nmr * i}`)
    }
    console.log('----------------------')
}

multiplicacao(2)
multiplicacao(5)
multiplicacao(9)