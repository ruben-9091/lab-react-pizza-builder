import calculatePrice from "./calculatePrice"

function Price({ pizza }) {
 
 
  

  return (
    <aside className="panel price">
      <h2>Your pizza's price</h2>

      <b>$10 cheese pizza</b>
      <ul>
        {pizza.pepperoni && <li>$1 pepperoni</li>} 
        {pizza.mushrooms && <li>$1 mushrooms</li>} 
        {pizza.greenPeppers && <li>$1 green peppers</li>}
        {pizza.whiteSauce && <li>$3 white sauce</li>}
        {pizza.glutenFreeCrust && <li>$5 gluten-free crust</li>}
      </ul>
      <strong>${calculatePrice(pizza)}</strong>
    </aside>
  )
}

export default Price
