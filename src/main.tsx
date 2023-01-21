import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './global.css';
import Root from "./routes/root";
import CheckForm from "./routes/checkForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/checkForm",
    element: <CheckForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
