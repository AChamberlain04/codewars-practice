//Write a funciton that removes the first and last hcaracters of a string. Youre given one parameter, the original string.  Your funciton should handle strings of any length >= 2 characters. For strings with exactly 2 characters, return an empty string.



function removeChar(str) {
  return str.slice(1, -1);
}