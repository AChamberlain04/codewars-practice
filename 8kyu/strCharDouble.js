//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.    

//Example:
//"String"      -->  "SSttrriinngg"





function doubleChar(str) {
  let result = "";
  for(let i = 0; i < str.length; i++){
    result += str[i] + str[i];
  }
  return result
}