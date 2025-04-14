//Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.
let numeros = []

for (let i = 0; i < 5; i++) {
    let aleatorio = Math.floor(Math.random() * 100) + 1
    numeros.push(aleatorio);
}

for (let i = 0; i < numeros.length; i++) {
    console.log("Número:", numeros[i], "Dobro:", numeros[i] * 2)
}
