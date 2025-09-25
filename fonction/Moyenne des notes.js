const prompt = require("prompt-sync")();
let tableau = [];
let somme = 0;
let i

function moyenne(tab){

    
for ( i = 0; i < 3; i++) {
  let nombre = Number(prompt("Entrez le nombre : " ));
    
  if (nombre!=0) {
    tableau[i]=nombre;
    somme = somme + nombre;
  } 
  else {
    console.log("Entrée invalide. Veuillez entrer un entier.");
 
  }
}


let moyenne = somme / tableau.length;

console.log("Tableau des nombres :", tableau);

console.log("Moyenne :", moyenne);

}

moyenne(tableau)