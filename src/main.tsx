import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

import GiftListRoute from './routes/GiftListRoute';
import ErrorRoute from './routes/ErrorRoute.tsx';
import GiftListItemRoute from './routes/GiftListItemRoute';
import GiftListItemEditRoute from './routes/GiftListItemEditRoute';

import { giftListRouteLoader } from './services/routerService.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GiftListRoute />,
    errorElement: <ErrorRoute />
  },
  {
    path: '/list/:id',
    element: <GiftListItemRoute />,
    loader: giftListRouteLoader,
  },
  {
    path: '/list/edit/:id',
    element: <GiftListItemEditRoute />,
    loader: giftListRouteLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
