'use strict';

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYeah : 1991,
    job : 'teacher',
    friends :['John', 'Michael', 'Steven'],
    hasDriversLicence : true,

    // calcAge: function(birthYeah) {
    //     return 2037 - birthYeah;
    // }

    calcAge: function() {
        console.log(this);
        return 2037 - this.birthYeah;
    }
};

console.log(jonas.calcAge(2000));
// console.log(jonas['calcAge'](2000));


