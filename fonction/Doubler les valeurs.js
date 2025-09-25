const prompt = require("prompt-sync")();
let A = []
let B =[]
let i
function doublerelem(tab) {
            
for( i = 0 ; i < 3 ; i++){
    A[i] = Number(prompt("Entre numbre " + (i+1) + ": "))
    
}
     console.log(A)
   B [i] = A.forEach((item => console.log(item * 2)))
  

      

              }

              // APPLER LA FONCTION
   doublerelem(A)
        