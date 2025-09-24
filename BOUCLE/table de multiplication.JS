const prompt = require("prompt-sync")();

let A = prompt("entrer en nombre : ")
let i = 1

while (i<=10){
        console.log(A + "*" + i + "=" + A*i)
        i++
        }