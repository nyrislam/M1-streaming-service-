import { Link } from 'react-router-dom';

import { MOVIE_LISTS } from '../../constants';

export default function Navbar() {
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <h1>M1</h1>
        </Link>
        {MOVIE_LISTS.map(el => (
          <Link key={el.url} to={el.url}>
            <h2>{el.title}</h2>
          </Link>
        ))}
      </div>
      <div className="header-righ">
        <h1>Тут будет поиск</h1>
      </div>
    </header>
  );
}
