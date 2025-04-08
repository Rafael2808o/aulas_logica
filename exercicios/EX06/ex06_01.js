// Utilizando o comando for, exiba todos os números ímpares, de 1 a 40.
const prompt = require('prompt-sync')()


for (let nmr = 1; nmr <= 40; nmr++) {
  if (nmr % 2 != 0) {
    console.log(nmr)
  }

}