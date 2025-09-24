const prompt = require("prompt-sync")();
 let A
 let premier = true
do {
     A  = Number(prompt("entrer un nombre entier "))
} while (A<=0)

for(let i=1 ;i<=A ; i++ ){
                          if( A%i==0){
                                  if (i!==1 && i!== A){
                                                        premier = false
                                                        break
                                                        }
                                  
                                 }
                                 else{
                                      premier=true 
                                      }
                                 
                        }
if(premier){
             console.log("premier")
           }
else{
       console.log("non premier")
    }



 


