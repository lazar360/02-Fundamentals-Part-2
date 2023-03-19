'use strict';
//1. Create a arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (a,b,c) => (a + b + c)/3;

let DolphinsScore1 = 44, 
DolphinsScore2 =  23,
DolphinsScore3 = 71;

let KoalasScore1 = 65,
KoalasScore2 = 54,
KoalasScore3 = 49;
//console.log(`${calcAverage(DolphinsScore1, DolphinsScore2, DolphinsScore3)}`)

const averageDolphinScore = calcAverage(DolphinsScore1, DolphinsScore2, DolphinsScore3);
const averageKoalaScore = calcAverage(KoalasScore1, KoalasScore2, KoalasScore3);

function checkWinner(averageDolphinScore, averageKoalaScore) {

    const winner = averageDolphinScore > averageKoalaScore ? "Dolphin" : "Koala";
    console.log(`The winner is ${winner}.`)

}

checkWinner(averageDolphinScore, averageKoalaScore);

