import Button from '../../../shared/ui/Button';

export default function Pagination({ totalPages }) {
  console.log('p', totalPages);
  const page = [];
  for (let i = 1; i < totalPages + 1; i++) {
    page.push(i);
  }
  const handlePageClick = item => console.log('page', item);
  return (
    <div className="controlCardList">
      {page.map(el => (
        <Button onClick={() => handlePageClick(el)}>{el}</Button>
      ))}
    </div>
  );
}
