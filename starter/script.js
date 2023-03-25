'use strict';

const jonasArray = [
    'Jonas',
    'Schmidt',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peters', 'Steven'],
    true
];
 
// continue and break the loop
console.log('ONLY STRING');
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i]);
}

console.log('BREAK WITH NUMBER');
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i]);
}






