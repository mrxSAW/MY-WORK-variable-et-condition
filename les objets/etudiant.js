const prompt = require('prompt-sync')();


console.log("etudiant cas ")
const  etudiant = new Object({
                              nom : "ali" ,
                              age : "12" ,
                             sepresenter : function () { 
                                console.log(`Bonjour, je m’appelle ${this.nom} et j ai ${this.age} ans.`)
                              }  
                            });

            console.log(etudiant)
            etudiant.sepresenter()

console.log("personne cas ")

const personne = new Object({
                                       nom : "jhon",
                                       age :"30" ,
                                       profesion: "ingenieur"

                                                 })
                          console.log(personne)
for (prop in personne){
                                        console.log(personne[prop])
                                                }                                        





console.log("class") 
const classe = new Object({
                     etudiants : ["karim ","ahmed", " sara"] ,
                     afficherEtudiants : function(){
                      for(let i=0 ; i<3;i++) {
                      console.log (this.etudiants[i])
                      }
                     }
                                  })

        classe.afficherEtudiants()


  console.log("tableau des objets")
  let tableau = [
                    {titre : "le bergoi", auteur : "victor ", annee : "1832" },
                     {titre : "la boites a mervielle " , auteur : "mohamed", annee :"1945" } ,
                      {titre : "rmana" , auteur :"rachid" , annee :"2000" } , 
                      

                    trouverLivre = function (titre) {
                           x=prompt("entrer le titre du livre")
                        for(let i=0 ; i<3 ; i++){
                         if (tableau [i].titre==x){
                            console.log("livre trouvé")
                            }
                         else{
                          console.log("livre non trouvé)")
                         }  
                        }
                     }
                  ]

    
    for (let i=0 ; i<3 ; i++){
                  console.log (tableau[i]. titre)
    }
    console.log(tableau[3])
    trouverLivre()
