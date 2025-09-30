const prompt = require('prompt-sync')();

tableau = [{ nom:"ali ", salaire:2000 } , { nom:"ahmed ", salaire:3000 } ,{ nom:"sara ", salaire:2500 } 
             ,{nom:"karim" , salaire:5000}            ]


for (let i=0 ; i<4 ; i++){
       if (tableau[i].salaire >=3000){
        console.log (tableau[i].nom)
       }
}             