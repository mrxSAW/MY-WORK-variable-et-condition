const prompt = require('prompt-sync')()
let str = prompt("entrer une pherase : ")
let vow = ['a','e','i','o','u']
let count = 0;


for (let i = 0; i < str.length; i++) {
  let char = str[i]; 
  if (vow.includes(char)) {
    count++;
  }
}

console.log("Nombre de voyelles :", count);

