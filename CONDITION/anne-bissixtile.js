const prompt = require("prompt-sync")();
let A = Number(prompt("entrer une annee :  " ))


            if ((A%4==0) && (A%100!==0 && A%400 == 0 )){
                                  console.log("annee bissixtile")
                                           }
            else {
                    console.log("annee non bissixtile")
                  }
