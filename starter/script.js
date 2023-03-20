'use strict';


const friends = ['Michael', 'John', 'Peter'];

// Ajoute une entrée à la fin de la liste
friends.push('Jay');

// Ajoute une entrée au début de la liste
friends.unshift('John');

// Enlève un élément à la fin de la liste
friends.pop();

// Enlève un élément au début de la liste
friends.shift();

// Indique l'index de la liste
console.log(friends.indexOf('John'));

// Retourne true si l'élément est dans la liste
console.log(friends.includes('John'));
friends.push(42);
console.log(friends.includes('42'));// égalité stricte donc retourne false



