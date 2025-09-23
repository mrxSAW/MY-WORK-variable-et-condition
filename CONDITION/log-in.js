const prompt = require("prompt-sync")();

let user = prompt("entrer votre nom d'utilisateur : ")
let mdpass =prompt("entrer votre mot de pass : ")


if (user == "admin" && mdpass == "1234" ){
                                         console.log("Bienvenue Admin")
                                         }
else if (user == "admin" && mdpass !== "1234" ){
                                            console.log("Mot de passe incorrect")
                                              }
else {
    console.log("Utilisateur introuvable")
}