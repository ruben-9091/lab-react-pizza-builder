import {
  PEPPERONI_POSITIONS,
  MUSHROOM_POSITIONS,
  GREEN_PEPPER_POSITIONS,
} from '../data/ingredients'

function Pizza({ pizza }) {
  return (
    <div id="pizza">
      {/* Green peppers */}
      {GREEN_PEPPER_POSITIONS.map((position) => (
        <section
          key={`green-pepper-${position}`}
          className={`green-pepper ${position}`}
        />
      ))}

      {/* Mushrooms */}
      {MUSHROOM_POSITIONS.map((position, index) => (
        <section key={`mushroom-${position}`} className={`mushroom ${position}`}>
          <div className="cap">{index + 1}</div>
          <div className="stem"></div>
        </section>
      ))}

      {/* Pepperoni */}
      {PEPPERONI_POSITIONS.map((position, index) => (
        <section key={`pep-${position}`} className={`pep ${position}`}>
          {index + 1}
        </section>
      ))}

      {/* Crust + Cheese + Sauce */}
      <section className="crust crust-gluten-free">
        <section className="cheese"></section>
        <section className="sauce sauce-white"></section>
      </section>
    </div>
  )
}

export default Pizza
