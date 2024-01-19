import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateForm, { createPostAction } from './components/CreateForm.jsx'
import Posts from './components/Posts.jsx'
import App from './routes/App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Posts /> },
      { path: "/create-post", element: <CreateForm />, action: createPostAction }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
