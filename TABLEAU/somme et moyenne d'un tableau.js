const prompt = require("prompt-sync")();

let tableau = [];
let somme = 0;
let i

for ( i = 0; i < 10; i++) {
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
console.log("Somme :", somme);
console.log("Moyenne :", moyenne);
