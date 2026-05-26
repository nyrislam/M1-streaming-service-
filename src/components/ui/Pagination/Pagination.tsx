export default function Pagination({ page, setPage, maxPage }) {
  let pag = [];
  for (let i = 1; i <= maxPage; i++) {
    if (1 == i || (i >= page - 0 && page + 1 >= i) || maxPage == i) {
      console.log(i);
      pag.push(i);
    } else if (pag[pag.length - 1] !== "...") {
      console.log(i);
      pag.push("...");
    }
  }
  return pag.map((page) => (
    <button onClick={(event) => setPage(page)}>{page}</button>
  ));
}
