function Controls({ pizza, onToggle }) {
  // TODO (Iteration 1+): wire each button's onClick to onToggle(<ingredient-name>)
  // TODO: add/remove the "active" class on each button based on the pizza state

  return (
    <div className="panel controls">
      <ul>
        <li>
          <button className="btn btn-pepperoni active">pepperoni</button>
        </li>
        <li>
          <button className="btn btn-mushrooms active">Mushrooms</button>
        </li>
        <li>
          <button className="btn btn-green-peppers active">Green peppers</button>
        </li>
        <li>
          <button className="btn btn-sauce active">White sauce</button>
        </li>
        <li>
          <button className="btn btn-crust active">Gluten-free crust</button>
        </li>
      </ul>
    </div>
  )
}

export default Controls
