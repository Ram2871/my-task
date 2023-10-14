import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/error-page/ErrorPage";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
