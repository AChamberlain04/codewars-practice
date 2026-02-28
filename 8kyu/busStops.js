//There is a bus moving in the city, and it takes and drops some people at each bus stop.
//You are provided with a list (or array) of integer pairs. 
//Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

//Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

//Take a look on the test cases.

let number = function(busStops){
  let total = 0;
  for (let i = 0; i < busStops.length; i++) {
    total += busStops[i][0] - busStops[i][1];
  }
  return total;
}


// //Alternative solution using reduce
// let number = function(busStops){
//   return busStops.reduce((total, [on, off]) => total + on - off, 0);
// }

// //Alternative solution using forEach
// let number = function(busStops){
//   let total = 0;
//   busStops.forEach(([on, off]) => {
//     total += on - off;
//   });
//   return total;
// }

// //Alternative solution using map
// let number = function(busStops){
//   return busStops.map(([on, off]) => on - off).reduce((total, current) => total + current, 0);
// }   

// //Alternative solution using for...of
// let number = function(busStops){
//   let total = 0;
//   for (const [on, off] of busStops) {
//     total += on - off;
//   }
//   return total;
// }

