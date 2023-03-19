'use strict';

// créer un tableau
const friends = ['Michael', 'John', 'Peter'];
const years = new Array(1991, 2000, 2022);

// accéder au tableau
console.log(friends[0]);
console.log(friends[2]);

// taille du tableau
console.log(friends.length);

// expression
console.log(friends[friends.length - 1]);

// remplacer un élément du tableau
friends[2] = 'Jay';
console.log(friends);

// on ne peut pas remplacer toutes les valeurs d'un tableau déclaré en constante
// friends = ['Bob', 'Alice']

// on peut inclure tout type de valeur et des variables dans le tableau
const firstName = 'jonas';
const jonas = [firstName, 'Nom', 2037 - 1991, 'teacher', friends];
console.log(jonas);




