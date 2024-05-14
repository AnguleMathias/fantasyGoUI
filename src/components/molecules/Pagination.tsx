import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  itemsPerPage,
  paginate,
  onItemsPerPageChange,
}) => {
  const maxPageNumbersVisible = 5; // Max number of pagination links to display

  // Calculate which numbers to show in the pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginationStart = Math.max(currentPage - 2, 1);
  const paginationEnd = Math.min(
    paginationStart + maxPageNumbersVisible - 1,
    totalPages
  );

  const visiblePageNumbers = pageNumbers.slice(
    paginationStart - 1,
    paginationEnd
  );

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div>
        <label htmlFor="itemsPerPage" className="mr-2">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="outline-none p-2 rounded-md border border-gray-300"
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <nav>
        <ul className="flex space-x-2">
          {currentPage > 1 && (
            <li
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer"
              onClick={() => paginate(currentPage - 1)}
            >
              Prev
            </li>
          )}
          {paginationStart > 1 && (
            <li
              className="px-2 py-1 text-gray-700 hover:text-black cursor-pointer"
              onClick={() => paginate(1)}
            >
              1
            </li>
          )}
          {paginationStart > 2 && (
            <li className="px-2 py-1 text-gray-700">...</li>
          )}
          {visiblePageNumbers.map((number) => (
            <li
              key={number}
              className={`px-2 py-1 ${
                currentPage === number ? "bg-red-700" : "bg-red-300"
              } text-white rounded hover:bg-red-500 cursor-pointer`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          {paginationEnd < totalPages - 1 && (
            <li className="px-2 py-1 text-gray-700">...</li>
          )}
          {paginationEnd < totalPages && (
            <li
              className="px-2 py-1 text-gray-700 hover:text-black cursor-pointer"
              onClick={() => paginate(totalPages)}
            >
              {totalPages}
            </li>
          )}
          {currentPage < totalPages && (
            <li
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
