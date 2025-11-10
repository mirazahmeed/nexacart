import React from 'react'
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Men from '../Products/Men/Men';
import Women from '../Products/Women/Women';
import Kids from '../Products/Kids/Kids';



export const router = createBrowserRouter([
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