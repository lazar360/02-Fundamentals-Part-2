'use strict';

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends :['John', 'Michael', 'Steven']
};

const nameKey = 'Name';
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);
//console.log(jonas.'last'+nameKey);

const interestedIn = prompt('What do you want to know about Jonas ? Choose beetween firstname, lastname,..')

if(jonas[interestedIn]) console.log(jonas[interestedIn]);