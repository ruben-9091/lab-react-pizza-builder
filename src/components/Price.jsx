function Price({ pizza }) {
  // TODO (Iteration 4):
  //   1. Hide each <li> when its ingredient is NOT active.
  //   2. Compute the total price based on the pizza state and show it in <strong>.
  //
  // Prices:
  //   base (cheese pizza) -> $10
  //   pepperoni           -> $1
  //   mushrooms           -> $1
  //   green peppers       -> $1
  //   white sauce         -> $3
  //   gluten-free crust   -> $5

  return (
    <aside className="panel price">
      <h2>Your pizza's price</h2>

      <b>$10 cheese pizza</b>
      <ul>
        <li>$1 pepperoni</li>
        <li>$1 mushrooms</li>
        <li>$1 green peppers</li>
        <li>$3 white sauce</li>
        <li>$5 gluten-free crust</li>
      </ul>
      <strong>$21</strong>
    </aside>
  )
}

export default Price
