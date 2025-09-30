const prompt = require('prompt-sync')();

const voiture = new Object({
                            marque:'BMW', 
                            model:'GTR' ,
                            annee: 2023
                              });

console.log(voiture)

console.log("marque et anneé "+voiture.marque,voiture.annee)

voiture.annee = 2024

console.log( voiture)


voiture.color= "green"


console.log( voiture)

delete voiture.model

console.log( voiture)