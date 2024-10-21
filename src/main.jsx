import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Selling from './pages/Selling.jsx'
import Km from './pages/Km.jsx'
import Year from './pages/Year.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      
    ]
  },
  {
    path:"/selling-price",
    element:<Selling/>
  },
  {
    path:"/km",
    element:<Km/>
  },
  {
    path:"/year",
    element:<Year/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
