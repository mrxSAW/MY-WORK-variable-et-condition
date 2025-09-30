const prompt = require('prompt-sync')();

/*
const entreprise = new Object({
                         adresse: { rue: "rue 123",
                                    ville: "assila ",
                                    codePostal: "20350"}
                                                 })

console.log(entreprise)
console.log(entreprise.adresse.ville )        */


/*

 let produits = [       { nom : "gateau" , prix :20 , quantité:5},
                        { nom : "lait" , prix : 4, quantité :5},
                        { nom : "chokolat", prix :2 , quantité:3},
                        { valeurTotalStock:0}
                                                        ]
       for (let i=0 ; i<3 ; i++){
        produits[i].valeurStock= produits[i].prix*produits[i].quantité
        produits[3].valeurTotalStock = produits[0].valeurStock + produits[1].valeurStock + produits[2].valeurStock
       }      

console.log(produits)             */




class  animal  {
                constructor(nom, type) {
                    this.nom = nom
                    this.type = type
                }
          parler=function(){
            console.log(`le ${this.type}  ${this.nom} fait du bruit `)
                      }      
                   } 
let x =   new animal ("rex" , "chien") 

x.parler()




