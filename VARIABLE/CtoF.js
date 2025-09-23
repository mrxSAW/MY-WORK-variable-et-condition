const prompt = require("prompt-sync")();

let tempc=prompt("entrer la temperature en °C : ")
let telF= (tempc * 1.8) + 32
console.log("la tempurature en fihrenhiet est : "+telF)
