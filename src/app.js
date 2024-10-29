const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name ?? "missingName"),
    React.createElement("p", {}, props.description ?? "missingDesc"),
  ]);
};
// "if you want to return multiple top-level React elements, that's how you do it, with an array"

const App = () => {
  //   console.log(React.createElement("h1", {}, "test console log h1"));
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Zino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "unholy potato mash, wtf Minnesota",
    }),
    React.createElement(Pizza),
  ]);
};
// call this a Stamp
// createElement uses the Stamp once to create that instance of the class (or component, in this case)

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render is a good place to put in parallel apps that might need to be swapped in/out
//  maybe like dev/prod elements
root.render(React.createElement(App));
