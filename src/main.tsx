import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'

import App from './App.tsx'
import TicketPage from './TicketPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/ticket/:id',
    element: <TicketPage />,
    action: async ({ request }) => {
      const formData = await request.formData()
      return formData
    }
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
