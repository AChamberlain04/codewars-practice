//Complete the function that reverses a string.  The input is a string and the output is a string. All Spaces should be retained.

function reverseWords(str) {
  return str.split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ")
}