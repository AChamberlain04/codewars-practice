function isIsogram(str) {
  //we need a function that can check if a string is an isogram. what ways of achieving this do you know?
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

/// function isIsogram(str) { 
//return new Set(str.toLowerCase()).size === str.length;}