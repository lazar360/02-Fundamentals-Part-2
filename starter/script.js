'use strict';

// // function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// console.log(calcAge1(2000));

// // function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// console.log(calcAge2(2001));

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(2002));

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));

