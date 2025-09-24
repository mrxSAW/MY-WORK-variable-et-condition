const prompt = require("prompt-sync")(); 

let A = []
let i =0
let B
let j 
while(i<3){
        
          A[i]=prompt("enter un mot   : ")
 
       i++
          }

          console.log(A)

  B = prompt("Entrez le mot à rechercher : ")

 if (!(A.includes(B))){

                         console.log("nom introvale")

                   }
    else { 
          console.log("la chaine" + B + "a ete trouver a la position  " + (A.indexOf(B)+1))
         }