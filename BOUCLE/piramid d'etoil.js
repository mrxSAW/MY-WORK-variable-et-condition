const prompt = require("prompt-sync")();

let lignes = parseInt(prompt("Entrez le nombre de lignes :"));
let compteur = 0;
let nombre = 2;

while (compteur < lignes) {
  let estPremier = true;

  if (nombre < 2) {
    estPremier = false;
  } else {
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        estPremier = false;
        break;
      }
    }
  }

  if (estPremier) {
    console.log("*".repeat(nombre));
    compteur++;
  }

  nombre++;
}

