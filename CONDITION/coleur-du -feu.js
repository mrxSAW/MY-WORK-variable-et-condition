const prompt = require("prompt-sync")();

let feu = prompt("entrer la coleur du feu ")
let mvmt 

if (feu=="rouge"){
                mvmt="arreter"  ;    
                }
 
else if (feu=="orange"){
                      mvmt ="attender" ;
                       }
else if (feu=="vert")  {
                      mvmt="marcher" ;
                       }
else {
          mvmt=="feu non reconu " ;
       }


  console.log(mvmt)