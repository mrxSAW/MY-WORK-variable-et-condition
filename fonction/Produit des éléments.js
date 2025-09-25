const prompt = require("prompt-sync")();

let tableau =[]
let i 
let mult = 1

function produitTableau(tab){


    for ( i = 0; i < 3; i++) {
  let nombre = Number(prompt("Entrez le nombre : " ));
    
  if (nombre!=0) {
    tableau[i]=nombre;
    mult = mult * nombre;
  } 
  else {
    console.log("Entrée invalide. Veuillez entrer un entier.");
 
  }
                     }
        console.log(mult)

}

produitTableau(tableau)