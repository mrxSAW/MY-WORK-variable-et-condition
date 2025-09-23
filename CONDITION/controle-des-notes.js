const prompt = require("prompt-sync")();

let A = Number(prompt("entrer la note : "));
let G ;

switch (true){
        case  A>=90 && A<=100:
             G ="A"
           break;
        case  A>=80 && A<=89:
           G = "B"  ;
           break;
        case  A>=70 && A<=79:
           G = "C"  ;
           break;
        case  A>=60 && A<=69:
           G = "D"  ;
           break;
        case  A<60 :
           G = "F"  ;
           break;
        case  A<0 && A>100 :
           G = "out of rage"  ;
           break;
        
                }
    console.log(G)