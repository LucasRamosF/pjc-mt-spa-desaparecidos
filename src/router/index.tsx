import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import AppLayout from "../components/layout/AppLayout";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const DetailsPage = React.lazy(() => import("../pages/DetailsPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

const LoadingFallback = () => <div className="text-center p-8">Carregando...</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/pessoa/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DetailsPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);