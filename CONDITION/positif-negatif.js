const prompt = require("prompt-sync")(); 

let A = prompt("entrer un nombre : ")

if (A>0) {
           console.log("le nombre et positif ") ;
           }
else if (A<0) {
           console.log("le nombre et nigatif ");
      }
else {
      console.log("le nombre est equal a 0");
     
     }