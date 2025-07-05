import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../AppLayout/Homepage.jsx';
import ErrorPage from '../ErrorPage';
import Restaurants from '../AppLayout/Restaurants.jsx';

let App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },

    {
      path: '/restaurants',
      element: <Restaurants />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
