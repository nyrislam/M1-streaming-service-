import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Layout from './layout/Layout';

import './styles/main.css';

import { createBrowserRouter, RouterProvider } from 'react-router';

<<<<<<< HEAD
import { MOVIE_LISTS, TOP_LISTS } from '../constants';
import FilmsList from '../pages/list/FilmsList';
import TopList from '../pages/list/TopList';
=======
import { MOVIE_LISTS } from '../constants';
import List from '../pages/list/List';
>>>>>>> fc41298bbc62b017d2e0d0506097a8efa5ccbba0

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
<<<<<<< HEAD
          element: <FilmsList />,
        })),
        ...TOP_LISTS.map(el => ({
          path: el.url,
          element: <TopList />,
=======
          element: <List />,
>>>>>>> fc41298bbc62b017d2e0d0506097a8efa5ccbba0
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
