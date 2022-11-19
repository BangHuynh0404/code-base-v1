import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

const RouterWrapper = () => {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default RouterWrapper;
