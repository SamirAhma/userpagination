const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center">
      <ul className="pagination flex ">
        <div className={`page-item m-2 ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link"
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </div>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item m-2 ${
              currentPage === number ? "active" : ""
            }`}
          >
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <div
          className={`page-item  m-2 ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
