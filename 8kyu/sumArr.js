// You get an array of Numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}


//parameters(arr)
//return the sum of the arr, posititive numbers
// return arr.reduce((acc,c) => acc + (c > 0 ? c : 0), 0);

