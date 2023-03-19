'use strict';

// créer un tableau
/*const friends = ['Michael', 'John', 'Peter'];
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
console.log(jonas);*/

// exercice : calculer l'âge en fonction d'un tableau de valeurs
const calcAge = birthYeah => 2037 - birthYeah;
const years = [1990, 1967, 2002, 2010, 2018] 
const age  = [];
console.log(years[years.length - 1]);

years.forEach( element => age.push(calcAge(element)));
console.log(age);