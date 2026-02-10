//Our teams match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is the opponent's score.

//For example: ["3:1", "2:2", "0:1", ...]
//Points are awarded for each match as follows:
//if x > y: 3 points
//if x < y: 0 points
//if x = y: 1 point
//We need to write a function that takes this collection and returns the total number of points our team (x) got in the season by summing up the points for each match. 
    
function points(games) {
// totalPoints will store the accumulated points
let totalPoints = 0;
  
  // loop through the games array to get the scores
  for(i=0; i<games.length; i++) {
 
   // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
    let xScore = Number(games[i].charAt(0)); 
    let yScore = Number(games[i].charAt(2));
    
    // Add points depending on the values of xScore compared to yScore
    if (xScore > yScore) { totalPoints += 3; }
    if (xScore < yScore) { totalPoints += 0; }
    if (xScore === yScore) { totalPoints += 1; }
  }
  
  return totalPoints;
}