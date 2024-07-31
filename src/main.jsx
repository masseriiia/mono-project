import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { Layout } from './layout/Menu/Layout.jsx'
import { AddExpense } from './pages/AddExpense/AddExpense.jsx'
import { UserContextProvider } from './context/user.context.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ]
  },
  {
    path: '/add',
    element: <AddExpense/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  </React.StrictMode>,
)
