"use client";

import ReactPaginate from "react-paginate";

const PaginationComp = () => {
  return (
    <div className="fixed bottom-7 left-0 right-0 my-0 mx-auto w-96 h-12">
      <ReactPaginate
        containerClassName="flex items-center justify-between bg-blue-700 p-3 rounded-md"
        nextClassName="text-white"
        previousClassName="text-white"
        pageClassName="text-white"
        breakClassName="text-white"
        pageCount={10}
        nextLabel="Next >"
        previousLabel="< previous"
        breakLabel="..."
      />
    </div>
  );
};

export default PaginationComp;
