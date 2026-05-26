import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Actor from "./pages/Actor/Actor";
import Card from "./pages/Card/Card";
import Flilms from "./pages/Flilms/Flilms";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import TopMovies from "./pages/TopMovies/TopMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/films",
        element: <Flilms />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/:kinopoiskId",
        element: <Card />,
      },
      {
        path: "/type/:title",
        element: <TopMovies />,
      },
      {
        path: "/staff/:staffId",
        element: <Actor />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
