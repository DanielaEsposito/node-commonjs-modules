
// people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
// La funzione dovrebbe restituisce un oggetto con tre proprietà: firstName, lastName, hobbies.
// (modificato)



const name = require("./name.Js");
const hobbies = require("./hobbies");
const person = ()=>{
    let firtsInformation = name ("daniela","esposito");
    let secondInformation = hobbies("cucina", "lettura", "disegno");

    return{firstName : firtsInformation.firstName,
           lastName: firtsInformation.lastName,
           hobbies : secondInformation.hobbies
    }
}
let prova = person();
//let prova = hobbies("disegno","cicina","lettura");
console.log(prova);

//console.log("test");
