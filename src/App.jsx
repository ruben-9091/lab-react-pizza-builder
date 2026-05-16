import { useState } from 'react'
import Header from './components/Header'
import Controls from './components/Controls'
import Price from './components/Price'
import Pizza from './components/Pizza'
import Footer from './components/Footer'

function App() {

const [pizza, setPizza] = useState({
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
})

function handleToggle(ingredient) {
  setPizza({...pizza, [ingredient]:!pizza[ingredient]})
}


  return (
    <>
      <Header />
      <Controls pizza={pizza} onToggle={handleToggle} />
      <Price pizza={pizza} />
      <Pizza pizza={pizza} />
      <p id="crumbs">&there4;</p>
      <Footer />
    </>
  )
}

export default App
