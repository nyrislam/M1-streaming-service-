import { Link } from 'react-router-dom';

import SearchBox from '../molecules/SearchBox';

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <h1>M1</h1>
        </Link>
        <Link to="/movies">
          <h2>Movies</h2>
        </Link>
        <Link to="/series">
          <h2>Series</h2>
        </Link>
      </div>
      <div className="header-righ">
        <SearchBox />
      </div>
    </header>
  );
}
