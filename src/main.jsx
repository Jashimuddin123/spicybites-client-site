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
import AddFood from './Components/AddFood';
import AllFood from './Components/AllFood';
// import DetailsFood from './Components/DetailsFood';
import SingleFood from './Components/SingleFood';
import FoodPurchase from './Components/FoodPurchase';
import MyAdedFood from './Components/MyAdedFood';
import Update from './Components/Update';

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
        path:"/allfoods",
        element:<AllFood></AllFood>
      
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
      path:"/addfood",
      element:<AddFood></AddFood>
      },
      {
        path:"/myAddedFood",
        element:<MyAdedFood></MyAdedFood>,
        loader :()=> fetch('http://localhost:5000/addfood') 
      },
     
      
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
           fetch(`http://localhost:5000/addfood/${params.id}`)
      },
      {
        path:"/foodPurchase/:id",
        element:<FoodPurchase></FoodPurchase>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addfood/${params.id}`)
      },
      {
        path:"updateFood/:id",
        element:<Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/addfood/${params.id}`)
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
