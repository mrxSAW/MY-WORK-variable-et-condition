const prompt = require("prompt-sync")();

let A = Number(prompt("entrer un nombre "))
let  result

if ( A%3==0){
           result = "FIZZ";
             }
else if (A%5==0){
              result = "BUZZ";
                }
else if (A % 5==0 && A % 3==0 ){
              result = "FIZZBUZZ" ;
                }
else{
          result = A ;
         }

    console.log(result)