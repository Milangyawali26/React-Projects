import React from "react";

const Pagination = ({ handlePageChange, currentPage, totalBlogs, pageSize }) => {
  const totalPages = Math.ceil(totalBlogs / pageSize);

  return (
    <div className="flex justify-center mt-6">
      <ul className="flex items-center space-x-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 border rounded-md ${pageNumber === currentPage ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className={`px-4 py-2 border rounded-md ${currentPage >= totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
