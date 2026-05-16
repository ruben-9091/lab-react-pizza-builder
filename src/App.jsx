import { useState } from 'react'
import Header from './components/Header'
import Controls from './components/Controls'
import Price from './components/Price'
import Pizza from './components/Pizza'
import Footer from './components/Footer'

function App() {
  // TODO (Iteration 1): define the pizza state with useState.
  //   Each ingredient should start as `true` (all toppings visible by default).
  //
  //   const [pizza, setPizza] = useState({
  //     pepperoni: true,
  //     mushrooms: true,
  //     greenPeppers: true,
  //     whiteSauce: true,
  //     glutenFreeCrust: true,
  //   })

  // TODO (Iteration 1): implement a handleToggle(ingredient) function that flips
  // the value of the given ingredient in the state and call setPizza with the
  // new object. Pass it down to <Controls /> as the `onToggle` prop.

  const pizza = {
    pepperoni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: true,
    glutenFreeCrust: true,
  }

  return (
    <>
      <Header />
      <Controls pizza={pizza} onToggle={() => {}} />
      <Price pizza={pizza} />
      <Pizza pizza={pizza} />
      <p id="crumbs">&there4;</p>
      <Footer />
    </>
  )
}

export default App
