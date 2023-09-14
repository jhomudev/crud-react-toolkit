import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/edit/:id',
    element: <App />
  }
]

export const router = createBrowserRouter(routes, {
  basename: '/crud-react-toolkit/'
})
