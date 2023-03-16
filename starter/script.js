'use strict';

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(apples);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
  }
  
  fruitProcessor(2,3);
