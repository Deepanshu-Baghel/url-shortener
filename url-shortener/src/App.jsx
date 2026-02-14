
import { Route } from 'lucide-react'
import './App.css'
import LandingPage from './pages/landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/app-layout'
import Dashboard from './pages/dashboard'
import AuthPage from './pages/auth'
import LinkPage from './pages/link'
import RedirectLink from './pages/redirect-link'

const router = createBrowserRouter([
  {
      element: <AppLayout/>,
      children: [
          { path: "/", element: <LandingPage/> },
          { path: "/dashboard", element: <Dashboard/> },
          { path: "/auth", element: <AuthPage/> },
          { path: "/link", element: <LinkPage/> },
          { path: "/redirect/:shortUrl", element: <RedirectLink/> }

      ]
  }
])

function App() {


  return <RouterProvider router={router} />
}

export default App
