function calculatePrice(pizza) {
  let total = 10;

  if (pizza.pepperoni) total += 1;
  if (pizza.mushrooms) total += 1;
  if (pizza.greenPeppers) total += 1;
  if (pizza.whiteSauce) total += 3;
  if (pizza.glutenFreeCrust) total += 5;

  return total;
}

export default calculatePrice;