const prompt = require("prompt-sync")();
let A = []
let B

function filtrerPairs(tab){


for (let i = 0; i < 3; i++) {
    B =prompt ("entrer un nombre : ")
    if(B % 2== 0){
    A[i] = B;
    }
}
console.log("Tableau :", A);
}
filtrerPairs(A)




