import IngredientButton from "./ingredientButton"


function Controls({ pizza, onToggle }) {

  return (
    <div className="panel controls">
      <ul>
        <li>
          <IngredientButton active={pizza.pepperoni} className="btn-pepperoni" onClick={() => onToggle("pepperoni")}>
            Pepperoni
          </IngredientButton>
        </li>
        <li>
          <IngredientButton active={pizza.mushrooms} className="btn-mushrooms" onClick={() => onToggle("mushrooms")}>
            Mushrooms
          </IngredientButton>
        </li>
        <li>
          <IngredientButton active={pizza.greenPeppers} className="btn-green-peppers" onClick={() => onToggle("greenPeppers")}>
            Green peppers
          </IngredientButton>
        </li>
        <li>
          <IngredientButton active={pizza.whiteSauce} className="btn-sauce" onClick={() => onToggle("whiteSauce")}>
            White sauce
          </IngredientButton>
        </li>
        <li>
          <IngredientButton active={pizza.glutenFreeCrust} className="btn-crust" onClick={() => onToggle("glutenFreeCrust")}>
            Gluten-free crust
          </IngredientButton>
        </li>
      </ul>
    </div>
  )
}

export default Controls
