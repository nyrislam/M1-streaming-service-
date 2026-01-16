import { Link } from 'react-router-dom';

import { TOP_LISTS } from '../../constants';
import TopList from './ui/TopList';

export default function Movies() {
  return (
    <div className="lex flex-col min-h-screen">
      {TOP_LISTS.map(item => (
        <section className="py-4">
          <Link to={item.url}>
            <h2 className="pb-4 hover:text-green-500 underline">
              {item.title}:
            </h2>
          </Link>
          <TopList type={item.value} />
        </section>
      ))}
    </div>
  );
}
