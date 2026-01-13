import { TOP_LISTS } from '../../constants';
import CollectionsTop from './collectionsTop/collectionsTop';

export default function Movies() {
  return (
    <div className="lex flex-col min-h-screen">
      <ul>
        {TOP_LISTS.map(el => (
          <CollectionsTop key={el.value} title={el.title} type={el.value} />
        ))}
      </ul>
    </div>
  );
}
