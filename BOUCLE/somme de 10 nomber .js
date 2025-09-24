const prompt = require("prompt-sync")();
let somme = 0;
let compteur = 0;
let num

while (compteur < 10) {
  
   num = Number(prompt("enter un nomber positif "));

 

  if (num < 0) {
    console.log("Nombre négatif ignoré.");
  } else {
    somme += num;
  }

  compteur++;
}

console.log("La somme des nombres valides est :" + somme);
