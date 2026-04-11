import { createBrowserRouter } from 'react-router';

import lazyRoutes from '@/lib/router/lazy-routes';
import ErrorBoundary from '@/components/core/ErrorBoundary';
import PrivateLayout from '@/components/layouts/PrivateLayout';
import PublicLayout from '@/components/layouts/PublicLayout';

// pages
const { Login, Register, Home, NotFound } = lazyRoutes;

const router = createBrowserRouter([
  {
    Component: PrivateLayout,
    ErrorBoundary,
    children: [
      {
        index: true,
        Component: Home
      },
      { path: '*', Component: NotFound }
    ]
  },
  {
    Component: PublicLayout,
    ErrorBoundary,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: '*', Component: NotFound }
    ]
  }
]);

export default router;
