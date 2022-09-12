//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

const comida = ["arroz", "feijao", "batata", "cenoura"]

for(let i=0; i<comida.length; i++){
    console.log(`${i+1} - ${comida[i].toUpperCase()}`)
}