import Button from '../../../shared/ui/Button';

export default function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
}) {
  const page = [];
  for (let i = 1; i < totalPages + 1; i++) {
    if (
      i == 1 ||
      i == totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      page.push(i);
    } else {
      if (page[page.length - 1] !== '...') {
        page.push('...');
      }
    }
  }
  console.log('act:', currentPage);
  console.log('totalPages:', totalPages);
  console.log('page[]:', page);
  if (!page) return <div className="animate-spin"></div>;
  return (
    <div className="flex justify-center items-center w-full gap-16 py-4">
      <div className="flex gap-2 p-0-16">
        {page.map(page => (
          <Button
            className={
              currentPage == page
                ? 'rounded-xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg px-4 py-2 text-white '
                : 'rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 text-white/70 hover:bg-white/20'
            }
            onClick={
              currentPage !== page
                ? () => setCurrentPage(page)
                : console.log('page == currentPage')
            }
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}
