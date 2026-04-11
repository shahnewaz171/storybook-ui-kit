import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';

import router from '@/lib/router';
import NotificationProvider from '@/components/core/NotificationProvider';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <NotificationProvider>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </NotificationProvider>
  </StrictMode>
);
