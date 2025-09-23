const prompt = require("prompt-sync")();

let A = Number(prompt("entrer un nombre : "))

if ((A %2 ) == 0)   {
    console.log("le nombre est paire ")
}
else {
        console.log("le nomber est inpaire ")
    }