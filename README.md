![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Pizza Builder

<br>

## Introduccion

Tenemos hambre de una buena pizza recien hecha. Por supuesto, queremos pedirla online, ya que hablar con una persona solo retrasaria el consumo de pizza.

Hay un solo problema: el constructor de pizzas de nuestra pizzeria local **no funciona**. Esta vez la pizzeria tiene suerte, porque su cliente de hoy es un desarrollador de React. Tu mision es completar la app para que el constructor de pizzas sea interactivo: los botones deben activar y desactivar ingredientes en la pizza, y el precio debe actualizarse automaticamente.

Esta es la version **React** del clasico [lab DOM Pizza Builder](https://github.com/IronPTSolutions/lab-dom-pizza-builder-2026). El HTML y el CSS ya estan portados a componentes JSX; tu trabajo es darle vida con **state + props + renderizado condicional**.

<br>

## Requisitos

- Haz Fork de este repo
- Clona este repo

<br>

## Submission

Una vez completado, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Solved lab"
git push origin main
```

Crea un Pull Request para que tus profesores puedan revisar tu trabajo.

<br>

## Getting Started

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto [http://localhost:5173](http://localhost:5173)) en el navegador.

<br>

## Estructura del proyecto

```
src/
├── App.jsx                  <- aqui vive el state de la pizza
├── main.jsx
├── index.css                <- todos los estilos (no hace falta tocarlos)
├── data/
│   └── ingredients.js       <- arrays con las posiciones de cada topping
└── components/
    ├── Header.jsx           <- listo
    ├── Footer.jsx           <- listo
    ├── Pizza.jsx            <- renderiza la pizza (toppings, masa, salsa)
    ├── Controls.jsx         <- los botones del panel izquierdo
    └── Price.jsx            <- el panel de precio
```

El proyecto ya tiene toda la estructura JSX y los estilos CSS terminados. Tu trabajo es completar la **logica de estado y props** en `App.jsx`, `Controls.jsx`, `Pizza.jsx` y `Price.jsx`.

El enfoque que vas a seguir se llama **lifting state up**: el estado de la pizza vive en `App` (con `useState`), se pasa hacia abajo a los hijos a traves de **props**, y los hijos llaman a una funcion (tambien recibida por props) para modificar el estado. Asi, el estado es la **unica fuente de verdad** de tu aplicacion.

<br>

---

### Iteracion 1: El state y el boton de pepperoni

#### 1.1 - Define el state

Abre `src/App.jsx`. Veras que ya hay un objeto `pizza` declarado como una constante. Conviertelo en **state** usando el hook `useState`:

```jsx
const [pizza, setPizza] = useState({
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
})
```

Todos los ingredientes empiezan en `true` porque al cargar la pagina queremos ver la pizza completa.

#### 1.2 - Crea la funcion `handleToggle`

Justo despues del `useState`, define una funcion que reciba el nombre de un ingrediente y haga toggle de su valor en el state:

```jsx
function handleToggle(ingredient) {
  setPizza({
    ...pizza,
    [ingredient]: !pizza[ingredient],
  })
}
```

Recuerda: en React **no se muta el estado**. Siempre creas un objeto nuevo con el spread (`...pizza`) y reemplazas la propiedad que cambia.

Pasale la funcion al componente `<Controls />` como una prop llamada `onToggle`:

```jsx
<Controls pizza={pizza} onToggle={handleToggle} />
```

#### 1.3 - Conecta el boton de pepperoni

Abre `src/components/Controls.jsx`. El componente ya recibe `pizza` y `onToggle` como props. Conecta el boton de pepperoni:

1. En `onClick`, llama a `onToggle("pepperoni")`.
2. La clase `active` del boton debe estar **solo** cuando `pizza.pepperoni` sea `true`. Usa un className condicional:

```jsx
<button
  onClick={() => onToggle('pepperoni')}
  className={`btn btn-pepperoni ${pizza.pepperoni ? 'active' : ''}`}
>
  pepperoni
</button>
```

#### 1.4 - Renderizado condicional del pepperoni

Abre `src/components/Pizza.jsx`. Ahora mismo las rodajas de pepperoni se renderizan siempre. Haz que **solo se rendericen si `pizza.pepperoni` es `true`**.

La forma idiomatica en React es usar el operador `&&`:

```jsx
{pizza.pepperoni &&
  PEPPERONI_POSITIONS.map((position, index) => (
    <section key={`pep-${position}`} className={`pep ${position}`}>
      {index + 1}
    </section>
  ))}
```

> Como alternativa, podrias mantener los elementos siempre montados y controlar solo su `style.visibility` con `style={{ visibility: pizza.pepperoni ? 'visible' : 'hidden' }}`. Ambas opciones son validas; la version con `&&` es la mas habitual en React.

Prueba tu codigo en el navegador: al hacer clic en el boton de pepperoni, las rodajas deberian aparecer y desaparecer, y el boton deberia cambiar de aspecto.

<br>

---

### Iteracion 2: El resto de los toppings

Ahora que tienes el patron funcionando para el pepperoni, aplica la misma logica para los otros dos toppings: **mushrooms** (champiñones) y **green peppers** (pimientos verdes).

#### 2.1 - Boton de mushrooms

- En `Controls.jsx`, conecta el boton `.btn-mushrooms`: `onClick` -> `onToggle("mushrooms")`, className condicional segun `pizza.mushrooms`.

#### 2.2 - Boton de green peppers

- Igual con el boton `.btn-green-peppers` y la clave `greenPeppers`.

#### 2.3 - Renderizado condicional en `Pizza.jsx`

Aplica el mismo patron con `&&` que usaste para el pepperoni:

| Ingrediente   | Clave en el state | Array a mapear            |
| ------------- | ----------------- | ------------------------- |
| Pepperoni     | `pepperoni`       | `PEPPERONI_POSITIONS`     |
| Mushrooms     | `mushrooms`       | `MUSHROOM_POSITIONS`      |
| Green peppers | `greenPeppers`    | `GREEN_PEPPER_POSITIONS`  |

<br>

---

### Iteracion 3: Salsa y masa

Los dos ingredientes restantes funcionan de forma diferente. En lugar de ocultar elementos, lo que hacemos es **añadir o quitar una clase CSS** que cambia su apariencia.

#### 3.1 - Salsa blanca (White sauce)

El elemento de la salsa siempre se renderiza, pero su clase varia segun el state:

- Si `pizza.whiteSauce` es `true`: la clase es `sauce sauce-white` (salsa blanca).
- Si `pizza.whiteSauce` es `false`: la clase es solo `sauce` (salsa de tomate, por defecto).

En `Pizza.jsx`, dentro del bloque de la crust, ajusta el className del `<section className="sauce ...">`:

```jsx
<section className={`sauce ${pizza.whiteSauce ? 'sauce-white' : ''}`}></section>
```

En `Controls.jsx`, conecta el boton `.btn-sauce` a `onToggle("whiteSauce")` y su className `active`.

#### 3.2 - Masa sin gluten (Gluten-free crust)

Mismo patron con la clase `crust-gluten-free`:

- Si `pizza.glutenFreeCrust` es `true`: `crust crust-gluten-free` (masa clara, sin gluten).
- Si `pizza.glutenFreeCrust` es `false`: solo `crust` (masa normal).

Conecta tambien el boton `.btn-crust` -> `onToggle("glutenFreeCrust")`.

<br>

---

### Iteracion 4: Calculo del precio

Abre `src/components/Price.jsx`. El panel muestra el desglose de cada ingrediente y el precio total. Necesitas que se actualice dinamicamente segun el state de la pizza.

#### 4.1 - Mostrar/ocultar los precios de cada ingrediente

Cada `<li>` corresponde a un ingrediente. Renderizalos condicionalmente con `&&` segun el state:

| Ingrediente        | Clave en el state    | Precio |
| ------------------ | -------------------- | ------ |
| Pepperoni          | `pepperoni`          | $1     |
| Mushrooms          | `mushrooms`          | $1     |
| Green peppers      | `greenPeppers`       | $1     |
| White sauce        | `whiteSauce`         | $3     |
| Gluten-free crust  | `glutenFreeCrust`    | $5     |

```jsx
<ul>
  {pizza.pepperoni && <li>$1 pepperoni</li>}
  {/* ...etc */}
</ul>
```

#### 4.2 - Calcula y muestra el precio total

El precio base de la pizza es siempre **$10** (pizza de queso). A ese precio, suma el coste de cada ingrediente activo:

```jsx
const total =
  10 +
  (pizza.pepperoni ? 1 : 0) +
  (pizza.mushrooms ? 1 : 0) +
  (pizza.greenPeppers ? 1 : 0) +
  (pizza.whiteSauce ? 3 : 0) +
  (pizza.glutenFreeCrust ? 5 : 0)
```

Y muestralo en el `<strong>`:

```jsx
<strong>${total}</strong>
```

Prueba desactivando y activando ingredientes. El precio total deberia recalcularse correctamente cada vez. Con todos los ingredientes activos, el total es **$21**. Con solo la pizza base (todo desactivado), es **$10**.

<br>

---

### Bonus 1: Refactor a un componente `IngredientButton`

Los cinco botones de `Controls.jsx` siguen exactamente el mismo patron. Refactoriza el codigo creando un componente reutilizable:

```jsx
function IngredientButton({ active, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${active ? 'active' : ''}`}
    >
      {children}
    </button>
  )
}
```

Y usalo en `Controls.jsx` para cada uno de los cinco botones.

### Bonus 2: Mover el calculo del precio a un helper

Crea un archivo `src/utils/calculatePrice.js` que exporte una funcion `calculatePrice(pizza)` que devuelva el total. Llama a esa funcion desde `Price.jsx`. Asi separas la **logica de negocio** de la presentacion.

<br>

---

Happy coding! :heart:
