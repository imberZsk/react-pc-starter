import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './global.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
