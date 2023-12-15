// components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  const calculateStartIndex = () => {
    if (totalPages <= 3) {
      return 1;
    } else if (currentPage <= 2) {
      return 1;
    } else if (currentPage >= totalPages - 1) {
      return totalPages - 2;
    } else {
      return currentPage - 1;
    }
  };

  const startIndex = calculateStartIndex();

  return (
    <div className="flex justify-center mt-4">
      {showPrev && (
        <button
          className="px-4 py-2 mx-1 border rounded bg-white text-gray-700"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {Array.from(
        { length: Math.min(totalPages - startIndex, 3) },
        (_, index) => index + startIndex
      ).map((page) => (
        <button
          key={page}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === page
              ? "bg-[#F8A849] text-black"
              : "bg-white text-gray-700"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {showNext && (
        <button
          className="px-4 py-2 mx-1 border rounded bg-white text-gray-700"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
