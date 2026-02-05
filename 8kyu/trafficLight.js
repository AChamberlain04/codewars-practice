
//Youre writing code to control yout towns traffic lights. you need a function to handle each change from 'green' to yellow, to red and then to green again. complete the function that takes a string as an argument representing the current state of the light and returns a stirng representing the state the light should change to. for example when the input is green, output should be yellow

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}