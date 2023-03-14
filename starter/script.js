'use strict';

// function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}
console.log(calcAge1(2000));

// function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
console.log(calcAge2(2001));