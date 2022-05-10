import { useState } from 'react';

function usePage(initialPage, lastPage) {
  const [page, setPage] = useState(initialPage);

  const previousDisabled = page === 0;
  const nextDisabled = page === lastPage;

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return { page, nextPage, previousPage, previousDisabled, nextDisabled };
}

export default function Pages() {
  const allCharacters = 23;
  const charactersPerPage = 10; // Rick and Morty App hat 20 per Page
  const pages = Math.ceil(allCharacters / charactersPerPage);

  const { page, nextPage, previousPage, previousDisabled, nextDisabled } =
    usePage(0, pages - 1);

  return (
    <>
      <h1>Test Paging</h1>
      <button disabled={previousDisabled} onClick={previousPage}>
        -
      </button>
      <span>{page}</span>
      <button disabled={nextDisabled} onClick={nextPage}>
        +
      </button>
    </>
  );
}
