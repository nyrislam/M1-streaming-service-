<<<<<<< HEAD
import { Link } from 'react-router-dom';

import { TOP_LISTS } from '../../constants';
import HomeList from './ui/HomeList';
=======
import { TOP_LISTS } from '../../constants';
import CollectionsTop from './collectionsTop/collectionsTop';
>>>>>>> fc41298bbc62b017d2e0d0506097a8efa5ccbba0

export default function Movies() {
  return (
    <div className="lex flex-col min-h-screen">
<<<<<<< HEAD
      {TOP_LISTS.map(item => (
        <section className="py-4">
          <Link to={item.url}>
            <h2 className="pb-4 hover:text-green-500 underline">
              {item.title}:
            </h2>
          </Link>
          <HomeList type={item.value} />
        </section>
      ))}
=======
      <ul>
        {TOP_LISTS.map(el => (
          <CollectionsTop key={el.value} title={el.title} type={el.value} />
        ))}
      </ul>
>>>>>>> fc41298bbc62b017d2e0d0506097a8efa5ccbba0
    </div>
  );
}
