// In an attempt to boost sales, the manager of a pizzeria has devised a pizza rewards system. if you already made at least 5 orders of at least 20 sollars you get a free 12inch pizza with 3 toppings of your choice.  However, the rewards system may change in the future. your manager wants you to implement a funciton that given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward. The dictionary will have the following structure: { 'customerName' : [list_of_order_values_as_integers] }.

const pizzaRewards = (customers, minOrders, minPrice) => 
    Object.keys(customers)
            .filter(name => customers[name]
              .filter(x => x >= minPrice).length >= minOrders);