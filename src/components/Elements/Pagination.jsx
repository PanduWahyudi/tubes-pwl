// // import React, { useState } from "react";
// import ReactPaginate from "react-paginate";

// const Pagination = ({ pageCount }) => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//     onPageChange(selectedPage.selected + 1); // karena indeks dimulai dari 0
//   };

//   return (
//     <ReactPaginate
//       className="flex justify-center items-center space-x-2 text-[18px] font-normal"
//       previousClassName="bg-[#E1E1E1] p-[10px] rounded"
//       nextClassName="bg-[#E1E1E1] p-[10px] rounded"
//       pageClassName="bg-[#E1E1E1] p-[10px] rounded w-[35px] text-center"
//       previousLabel={"<"}
//       nextLabel={">"}
//       breakLabel={"..."}
//       pageCount={pageCount}
//       marginPagesDisplayed={2}
//       pageRangeDisplayed={5}
//       containerClassName={"pagination"}
//       initialPage={currentPage}
//     />
//   );
// };

// export default Pagination;
