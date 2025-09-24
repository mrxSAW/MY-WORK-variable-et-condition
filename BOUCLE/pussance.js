const prompt = require("prompt-sync")();

let B = Number(prompt("Entrer la base : "));
let E = Number(prompt("Entrer la puissance : "));

let i = 0;
let num = 1;

while (i < E) {
    num = num * B;
    i = i + 1;
}

console.log(B + " ^ " + E + " = " + num);



