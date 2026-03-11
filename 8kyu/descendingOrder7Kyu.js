//Your task is to make a function that takes an integer as input, and returns the integer with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => Number(String(n).split('').sort((a, b) => b - a).join(''));

//or function descendingOrder(n) {
//   return parseInt(n.toString().split('').sort().reverse().join(''));
// }    

//or function descendingOrder(n) {
//   return +n.toString().split('').sort().reverse().join('');
// }    
