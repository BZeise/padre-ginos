import { createRoot } from "react-dom/client";
import Order from "./Order";
import { StrictMode, useState } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook = useState([]);

  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};
// call this a Stamp
// createElement uses the Stamp once to create that instance of the class (or component, in this case)

const container = document.getElementById("root");
const root = createRoot(container);
// root.render is a good place to put in parallel apps that might need to be swapped in/out
//  maybe like dev/prod elements
root.render(<App />);
