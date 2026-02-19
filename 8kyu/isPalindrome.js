//Write a funciton that checks if a given string (case sensitive) is a palindrome.
//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

function isPalindrome(x) {
const formatted = x.toLowerCase();
 return formatted === formatted.split('').reverse().join('');
}