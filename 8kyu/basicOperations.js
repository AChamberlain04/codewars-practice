//Your task is to create a function that does four basic mathematical operations.  The function shoudl take three arguments - operation(string/char), value1(number), value2(number).  The function should return the result of the mathematical operation specified in the first argument, on the numbers provided in the second and third arguments.

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      throw new Error('Invalid operation');
  }
}