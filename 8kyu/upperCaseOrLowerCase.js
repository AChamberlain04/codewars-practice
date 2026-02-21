// In this Kata, you will be given a string and your task is to convert it to upper or lower case depending on which case is more prevalent in the original string. If the string contains an equal number of upper and lower case letters, convert the string to lower case.



function solve(s){
  let countLowerCase = 0;
  let countUpperCase = 0;
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      countUpperCase++;
    } else {
      countLowerCase++;
    }
  }
  
  if(countUpperCase > countLowerCase){
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}