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
    },

    summary: function() {
        console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job} and ${this.hasDriversLicence ?' he has a driver license' : ' he doesn\'t have a driver license'}`)  
    }
};

jonas.summary();

