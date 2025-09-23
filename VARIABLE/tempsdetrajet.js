const prompt = require("prompt-sync")();

let V = Number(prompt("entrer la vitesse en Km/h : "))
let D = Number(prompt("entrer la distence en Km : "))

let T = (D/V)

console.log("le temps a passer dans votre trajet est : "+T + " h")



