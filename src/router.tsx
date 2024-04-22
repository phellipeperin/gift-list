import { createBrowserRouter } from 'react-router-dom';

import App from './app';

import LoginRoute from './routes/LoginRoute';
import GiftListRoute from './routes/GiftListRoute';
import ErrorRoute from './routes/ErrorRoute';
import GiftListItemRoute from './routes/GiftListItemRoute';
import GiftListItemEditRoute from './routes/GiftListItemEditRoute';

import { giftListRouteLoader } from './services/routerService.ts';

const router = createBrowserRouter([
  // TODO organise better the error route and children as to not repeat too much code
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
        element: <GiftListRoute />,
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
    ]
  },
]);

export default router;
