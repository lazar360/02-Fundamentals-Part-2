"use strict";
const monSuperObjet = {
    cquoi : "chaise",
    oucest : "au bureau",
    pourquoifaire : "s'assoir"
    }

console.log(">>>>>> on parcourt les propriétés de l'objet");
for(var element in monSuperObjet){
    console.log(element);
}

console.log(">>>>>>>>> on parcourt les valeurs dans les propriétés de l'objet");
for(var element in monSuperObjet){
    console.log(monSuperObjet[element]);
}