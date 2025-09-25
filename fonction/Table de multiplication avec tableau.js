const prompt = require("prompt-sync")();
let A = prompt("entrer le nombre pour calculer sa table de multiplication : ")
function tableMultiplication(n) {
    let resultat = [];

    for (let i = 1; i <= 10; i++) {
        resultat.push(n * i);
    }

    return resultat;
}


console.log(tableMultiplication(A)); 

