'use strict';

function logger() {
    console.log("Hello this course is very boring!");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

// ne retourne que le console log
fruitProcessor(5,8);

// pour avoir le jus, il faut le stocher dans un verre
var glace = fruitProcessor(5,8);
console.log(glace);

// ou pas vu que la fonction retourne une chaîne
console.log(fruitProcessor(5,8));

