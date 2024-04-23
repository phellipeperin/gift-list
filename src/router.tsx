import { createBrowserRouter } from 'react-router-dom';

import App from './app';

import LoginRoute from './routes/LoginRoute';
import ErrorRoute from './routes/ErrorRoute';
import CatalogListRoute from './routes/CatalogListRoute.tsx';
import CatalogItemRoute from './routes/CatalogItemRoute.tsx';
import CatalogItemEditRoute from './routes/CatalogItemEditRoute.tsx';

import {
  catalogListRouteLoader,
  catalogItemRouteLoader,
} from './services/routerService.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: '/login',
        element: <LoginRoute />,
      },
      {
        path: '/list',
        element: <CatalogListRoute />,
        loader: catalogListRouteLoader,
      },
      {
        path: '/list/:userId/:id',
        element: <CatalogItemRoute />,
        loader: catalogItemRouteLoader,
      },
      {
        path: '/list/edit/:id',
        element: <CatalogItemEditRoute />,
        loader: catalogItemRouteLoader,
      },
    ],
  },
]);

export default router;
