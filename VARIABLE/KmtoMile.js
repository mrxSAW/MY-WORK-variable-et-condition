const prompt = require("prompt-sync")(); 

let disKm = Number(prompt("enter la distence en kilometre : "))
let disMile = (disKm/1.609)

console.log("la distence en mile est : "+disMile)

