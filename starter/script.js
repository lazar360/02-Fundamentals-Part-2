'use strict';

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYeah : 1991,
    job : 'teacher',
    friends :['John', 'Michael', 'Steven'],
    hasDriversLicence : true,

    calcAge: function() {
        this.age = 2037 - this.birthYeah;
        return this.age;
    }
};



