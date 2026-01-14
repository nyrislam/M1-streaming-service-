import { TOP_LISTS } from '../../constants';
import TopList from './ui/TopList';

export default function Movies() {
  return (
    <div className="lex flex-col min-h-screen">
      {TOP_LISTS.map(item => (
        <section>
          <h2>{item.title}</h2>
          <TopList type={item.value} />
        </section>
      ))}
    </div>
  );
}
