const prompt = require('prompt-sync')();


const objet1 = {
    nom : "ali" ,
    age : 12 , 
    type : "etudiant"
}

const objet2 = {}




function copiere (objet1) {
    for (let prop in objet1) {
        objet2[prop] = objet1[prop]
    }
    console.log(objet1)
    console.log(objet2)
}



copiere(objet1)