const prompt = require("prompt-sync")();

let A =  Number(prompt("entrer le nomber A : "))
let B =  Number(prompt("entrer le nomber B :  "))

let add = (A+B)
let soust = (A-B)
let mult = (A*B)
let qotient = (A/B)
let modul = (A%B)

console.log("la somme est : " +add)
console.log("la diffirrence est :  " + soust)
console.log("la multiplication est : " + mult)
console.log("la qotient est : " + qotient)
console.log("le modulo est : " + modul)

