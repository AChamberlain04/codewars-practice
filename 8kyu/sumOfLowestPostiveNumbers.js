//create a function that takes an array of numbers and returns the sum of the two lowest positive numbers. No floats or empty arrays will be passed.

function sumTwoSmallestNumbers(numbers) {  
  // sort the array
 numbers.sort((acc, c) => acc - c);
  
  // Return the sum of the two lowest positive numbers
  return numbers[0] + numbers[1];
}