const prompt = require("prompt-sync")();
 let A = prompt("entrer un nombre : ")
const B = [...A]

B.reverse ()
const C = B.join("")
console.log(A)
console.log(C)


