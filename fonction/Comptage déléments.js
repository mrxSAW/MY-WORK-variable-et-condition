const prompt = require("prompt-sync")();

let A = [];
let B;
let contelem = 0;

function compterOccurrences(tab, valeur) {
  
  for (let i = 0; i < 3; i++) {
    A[i] = prompt("Entrez un mot : ");
  }

  console.log("Tableau :", A);

  
  B = prompt("Entrez le mot à rechercher : ");

  
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B) {
      contelem++;
    }
  }

  console.log("Nombre d'occurrences de", B, ":", contelem);
}

compterOccurrences(A,B);
