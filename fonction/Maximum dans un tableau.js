const prompt = require("prompt-sync")();

let tab = []
let i = 0
let max
function maxTableau(tab){

    while(i<3){
        
          tab[i]=prompt("enter un nombre  : ")
 
       i++
          }

          console.log(tab)
         max=tab[0]
  for (i=0;i<4 ;i++) {
       if(max<tab[i+1]){

           max = tab[i+1]
       } 
       
      }
       
        
  console.log("max est : "+ max)
  }

  maxTableau(tab)

  