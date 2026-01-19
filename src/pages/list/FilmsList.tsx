import FindList from '../list/ui/FindList';

export default function FilmsList() {
  return (
    <div className="lex flex-col min-h-screen">
      <FindList find="Films" />
    </div>
  );
}
