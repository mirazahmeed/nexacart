import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Root from "./Components/Root/Root.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Home from "./Components/Home/Home.jsx";
import Men from "./Components/Products/Men/Men.jsx";
import Women from "./Components/Products/Women/Women.jsx";
import Kids from "./Components/Products/Kids/Kids.jsx";

const router = createBrowserRouter([
  {     path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: "men", Component: Men},
            {path:"women", Component: Women},
            {path:"kids", Component: Kids},

        ]
        }
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
