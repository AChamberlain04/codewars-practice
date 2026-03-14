//The cockroach is one of the fastes insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). 

function cockroachSpeed(s) {
  // Convert km/h to cm/s
  const speedInCmPerSecond = (s * 100000) / 3600;
  // Return the floored value
  return Math.floor(speedInCmPerSecond);
}


// Example usage:
console.log(cockroachSpeed(1.08));

//or

function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}