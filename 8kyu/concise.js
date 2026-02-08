//Provided is a funciton which accepts two parameters in the following order: array, element. and returns the index of the element if found and "not found" otherwise. Your task is to shorten the code as much as possible in order to eet the character count requirements of the Kata. You may assume that all the elements are unique.





function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
//
//solution below
const find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";