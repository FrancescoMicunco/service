import ReactDOM from 'react-dom/client';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as homeLoader } from './Home';
import ErrorPage from './errorPage';
import User from './User';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/", element: <Home />, errorElement: <ErrorPage />, loader: homeLoader,
    children: [{ path: "user/:userId", element: <User />, errorElement: <ErrorPage />, loader: homeLoader, }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
