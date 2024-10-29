import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Zino's - Order Now</h1>
      <Order />
    </div>
  );
};
// call this a Stamp
// createElement uses the Stamp once to create that instance of the class (or component, in this case)

const container = document.getElementById("root");
const root = createRoot(container);
// root.render is a good place to put in parallel apps that might need to be swapped in/out
//  maybe like dev/prod elements
root.render(<App />);
