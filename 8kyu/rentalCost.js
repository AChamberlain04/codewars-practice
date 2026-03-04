//each day you rent a car costs $40. if you rent the car for 7 or more days, you get $50 off your total. if you rent the car for 3 or more days, you get $20 off your total. write a function that takes the number of days as input and returns the total cost of the rental car.

function rentalCarCost(d) {
  let cost = d * 40;
  if (d >= 7) {
    cost -= 50;
  } else if (d >= 3) {
    cost -= 20;
  }
  return cost;
}