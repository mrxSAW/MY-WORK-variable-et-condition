const prompt = require("prompt-sync")();

let MAD = Number(prompt("entrer la valeur en dirhame : "))
let euro = (MAD*10.61) 

console.log("la valeur en euro est : "+euro)
