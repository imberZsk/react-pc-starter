import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('@/pages/home'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])
export default router
