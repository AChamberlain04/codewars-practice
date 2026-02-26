//create a function that takes in an array of numbers. return a new array containing every even number from the original array.
function evenNumbers(array) {
    let evenArray = [];
    array.forEach(num => {
        if(num % 2 === 0){
            evenArray.push(num)
        }
    });
     return evenArray
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]