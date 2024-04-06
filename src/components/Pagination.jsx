import "../assets/Styles/pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  firstPostIndex,
  lastPostIndex,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const prevPage = () => {
    if (currentPage !== firstPostIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastPostIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>

      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button onClick={nextPage} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};
export default Pagination;
