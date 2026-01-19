import Button from '../../../shared/ui/Button';

export default function Pagination({ totalPages, setCurrentPage }) {
  console.log('p', totalPages);
  const page = [];
  for (let i = 1; i < totalPages + 1; i++) {
    page.push(i);
  }
  return (
    <div className="controlCardList">
      {page.map(el => (
        <Button onClick={() => setCurrentPage(el)}>{el}</Button>
      ))}
    </div>
  );
}
