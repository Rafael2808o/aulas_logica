// Crie uma lista com os meses e imprima apenas os meses que começam com "J".
let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
let letra = 'j'

for (let i = 0; i < meses.length; i++) {
    if (meses[i][0] === letra) {
        console.log(meses[i])
    }
}