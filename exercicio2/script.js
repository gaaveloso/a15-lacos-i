//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let num = Number(prompt("Tabuada de qual número?"))
console.log(`Calculando tabuada de ${num}...`)
for (let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}