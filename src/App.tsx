import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FoundCards from './pages/FoundCards';
import FullInfo from './pages/FullInfo';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movie/:name_original" element={<FullInfo />} />
          <Route path="/serial/:name_original" element={<FullInfo />} />
          <Route path="/search" element={<FoundCards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
