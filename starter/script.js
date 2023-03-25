'use strict';

const jonasArray = [
    'Jonas',
    'Schmidt',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peters', 'Steven'],
    true
];

const types = []; 
 
for(let i = 0; i < jonasArray.length; i++){
    console.log(`Dans jonasArray à l'index ${i}, il y a ${jonasArray[i]}`);

    types.push(typeof jonasArray[i]);

}

console.log(types);


