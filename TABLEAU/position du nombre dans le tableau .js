const prompt = require("prompt-sync")();

let A = []
let i = 0 
let B
while(i<8){
        
          A[i]=prompt("enter un nombre  : ")
 
       i++
          }

          console.log(A)

B = Number(prompt("Entrez le nombre à rechercher : "));

let trouve = false;
for (let j = 0; j < A.length; j++) {
  if (A[j] === B) {
    console.log("Le nombre"+B+ "est trouvé à la position "+j );
    trouve = true;
    break; 
  }
}

if (trouve = false) {
  console.log(" Le nombre"+B+ "n'est pas présent dans le tableau");
}
