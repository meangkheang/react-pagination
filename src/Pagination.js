const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let x = 1; x <= Math.ceil(totalPosts / postsPerPage); x++) {
    pageNumbers.push(x);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a onClick={() => paginate(num)} href="!#" className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
