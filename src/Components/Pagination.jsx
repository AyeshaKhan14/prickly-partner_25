import "../Styles/pagination.css";

export const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  handlePageChange,
}) => {
  return (
    <div className="btn-container">
      <button
        className="previous-btn"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(-1)}
      >
        PREV
      </button>
      <button style={{ border: "none", margin: "0px 5px", fontWeight: "bold" }}>
        {currentPage}
      </button>
      <button
        className="next-btn"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(1)}
      >
        NEXT
      </button>
    </div>
  );
};
