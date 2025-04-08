const prompt = require('prompt-sync')()
let comidas = []

for (let i = 1; i <= 6; i++) {
    let comida = prompt(`Digite a ${i}ª comida: `)
    comidas.push(comida)
}

console.log(comidas)
console.log(comidas[0])
console.log(comidas[4])
comidas[5] = ["Strogonoff"]
console.log(comidas)
comidas.push('Strogonoff de carne')
console.log(comidas)
comidas.splice(5, 0, 'Strogonoff de frango')
console.log(comidas)
comidas.shift()
console.log(comidas)
comidas.pop()
console.log(comidas)
console.log(comidas.slice(0,3))
console.log(comidas.slice(3,7))
console.log(comidas.length)
comidas.reverse()
console.log(comidas)
