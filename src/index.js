import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './App';
import ReportView from './ReportView';

const router = createBrowserRouter([
  {
    index: true,
    element: <Index to="index"/>,
  },
  {
    path: '/my-list',
    element: <ReportView/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();