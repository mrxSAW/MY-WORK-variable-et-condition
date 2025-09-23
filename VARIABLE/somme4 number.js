const prompt = require("prompt-sync")();

let A = Number(prompt("entrer A : "))
let B = Number(prompt("entrer B : "))
let C = Number(prompt("entrer C :  "))
let D = Number(prompt("entrer D : "))

let somme = A+B+C+D
let moyenne = (somme/4)
console.log("la somme des nombres est    : "+somme)
console.log("la moyenne des nombres est  : "+moyenne)

