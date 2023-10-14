import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider } from "react-router-dom";
// Bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/js/bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

//App Router
import router from "./utility/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();