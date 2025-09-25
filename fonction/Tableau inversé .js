const prompt = require("prompt-sync")(); 
let A = []
let i = 0
let j 
let B

function inverserTableau(tab){
    while(i<3){
        
          A[i]= Number(prompt("enter un nombre  : "))
 
         i++;
    }

          console.log(A)

          B = A.reverse()

        console.log(B)




 }

 inverserTableau(A)




