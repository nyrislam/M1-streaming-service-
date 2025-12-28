import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./components/pages/Home"
import Movies from "./components/pages/Movies"
import Series from "./components/pages/Series"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/series' element={<Series />}/>
      </Routes>
    </BrowserRouter>
  )
}
