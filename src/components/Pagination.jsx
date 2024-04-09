import "../assets/Styles/pagination.css";
import { useState } from "react";

const Pagination = ({ data, postsPerPage, setCurrentPage, currentPage }) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageLimit] = useState(0);

  const totalPosts = data.length;

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  // console.log(pages);

  const totalPages = Math.ceil(data.length / postsPerPage);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === pages[0]}>
        Prev
      </button>

      {pages.map((page) => {
        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
          return (
            <button
              key={page}
              id={page}
              onClick={handleClick}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        } else {
          return null;
        }
      })}

      <button onClick={nextPage} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};
export default Pagination;
