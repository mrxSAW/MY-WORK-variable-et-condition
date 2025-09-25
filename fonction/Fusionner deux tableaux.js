const prompt = require("prompt-sync")();
 let A = []
 let B = []
 let C = []

 function fusionner(tab1, tab2){

     for( i = 0 ; i < 3 ; i++){
    A[i] = Number(prompt("Entre numbre TAB1 " + (i+1) + ": "))
    
                          }
    
     for( i = 0 ; i < 3 ; i++){
    B[i] = Number(prompt("Entre numbre TAB2 " + (i+1) + ": "))
    
                          }                     

     

   C = A.concat(B)       

     
     console.log(B)
     console.log(B)
     console.log(C)

 }

 fusionner (A)
