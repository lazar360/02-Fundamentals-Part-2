'use strict';

const calcAge = function(birthYeah){
    return 2037 -birthYeah;
}


const yearsUntilRetirement = function(birthYeah, firstName) {
    const age = calcAge(birthYeah)
    const retirement = 65 - age;
    return retirement > 0 ? retirement : -1;
    //return `${firstName} retires in ${retirement} years`;
  }
  console.log(yearsUntilRetirement(1991, 'Jonas')); 
  console.log(yearsUntilRetirement(1970, 'Bob'));
  
