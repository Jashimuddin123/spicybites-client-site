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
import OrderdFood from './Components/OrderdFood';
import Gallery from './Components/Gallery';
import Private from './pRIVATErOUTE/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader :()=> fetch('http://localhost:5000/topFood')

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
      element: <Private>
        <AddFood></AddFood>
      </Private>
      },
      {
        path:"/myAddedFood",
        element:<MyAdedFood></MyAdedFood>,
        loader :()=> fetch('http://localhost:5000/addfood') 
      },
      {
        path:"/gallery",
        element:<Gallery></Gallery>,
        loader :()=> fetch('http://localhost:5000/addfood') 
      },
     
      
      {
        path: "/singleFood/:id",
        element: <Private>
           <SingleFood></SingleFood>
        </Private>,
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
      },
      {
        path: "/purchasefood",
        element:<OrderdFood></OrderdFood>,
        loader :()=> fetch('http://localhost:5000/purchasefood') 
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
