import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './AuthProvider/AuthProvider';
import Register from './Components/Register';
import Login from './Components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
