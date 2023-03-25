'use strict';

const jonasArray = [
    'Jonas',
    'Schmidt',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peters', 'Steven']
];

// forleti 
// for(let i = 0; i < jonasArray.length; i++){
//     console.log(`Dans jonasArray à l'index ${i}, il y a ${jonasArray[i]}`);
// }

// forof
for(var jonasIndex of jonasArray){
    console.log(`Dans jonasArray, il y a ${jonasIndex}`);
}


