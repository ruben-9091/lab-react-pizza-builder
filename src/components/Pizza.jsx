import {
  PEPPERONI_POSITIONS,
  MUSHROOM_POSITIONS,
  GREEN_PEPPER_POSITIONS,
} from '../data/ingredients'

function Pizza({ pizza }) {
  return (
    <div id="pizza">

      {pizza.pepperoni && PEPPERONI_POSITIONS.map((position, index) => (
        <section key={`pep-${position}`} className={`pep ${position}`}>
          {index + 1}
        </section>
      ))}

      {pizza.greenPeppers && GREEN_PEPPER_POSITIONS.map((position) => (
        <section
          key={`green-pepper-${position}`}
          className={`green-pepper ${position}`}
        />
      ))}

      {pizza.mushrooms && MUSHROOM_POSITIONS.map((position, index) => (
        <section key={`mushroom-${position}`} className={`mushroom ${position}`}>
          <div className="cap">{index + 1}</div>
          <div className="stem"></div>
        </section>
      ))}

     
      <section className={`crust ${pizza.glutenFreeCrust ? "crust-gluten-free" : ""}`}>
        <section className="cheese"></section>
        <section className={`sauce ${pizza.whiteSauce ? "sauce-white" : ""}`}></section>
      </section>
    </div>
  )
}

export default Pizza
