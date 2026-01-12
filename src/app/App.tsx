import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Layout from './layout/Layout';

import './styles/main.css';

import { createBrowserRouter, RouterProvider } from 'react-router';

import { MOVIE_LISTS } from '../constants';
import List from '../pages/list/List';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <List />,
        })),
        {
          path: '/films/:id',
          element: <Detail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
