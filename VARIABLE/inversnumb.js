const prompt = require("prompt-sync")(); 

let num = []
num[0]  = Number(prompt("entrer le 1er chifre :   "))
num [1] = Number(prompt("entrer le 2eme chifre :  "))
num [2] = Number(prompt("entrer le 3 eme chifre : "))

console.log("la list est           : "+num)

num.reverse()

console.log( "la list inversser est : "+num)



