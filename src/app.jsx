import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
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
