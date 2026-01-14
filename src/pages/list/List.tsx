import MoviesList from '../home/ui/MoviesList';

export default function List({ value }) {
  return (
    <div className="lex flex-col min-h-screen">
      <MoviesList type={value} />
    </div>
  );
}
