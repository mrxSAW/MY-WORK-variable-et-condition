const prompt = require("prompt-sync")();

   let pass = prompt("enter votre mot de pass : ")
   let lengeur =  pass.length 
   let  force

  if (lengeur<6){
                 force ="faible" ;
                  }
    else if (lengeur>=6 && lengeur<8){
                      force = "moyen";
                       }  
    else if (lengeur>=8){ 
                    force ="fort";    }
    else {
         
            }
                    
    console.log(force)