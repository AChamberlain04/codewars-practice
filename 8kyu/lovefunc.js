//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.


function lovefunc(flower1, flower2){
  return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !==0 && flower2%2 == 0)) ? true : false;

}
