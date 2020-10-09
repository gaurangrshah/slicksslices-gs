import calculatePizzaPrice from './calcuatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // calcualte the total cost of each pizza (including toppings && calculate order total)
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );

    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
