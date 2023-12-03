"use client";

import ReactPaginate from "react-paginate";

export interface PaginationCompProps {
  pageCount?: number;
  onClick?: (clickEvent: {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
  }) => boolean | number | void;
  onPageChange?(selectedItem: { selected: number }): void;
  onPageActive?(selectedItem: { selected: number }): void;
}

const PaginationComp = (props: PaginationCompProps) => {
  return (
    <div className="fixed bottom-7 left-0 right-0 my-0 mx-auto w-96 h-12">
      {props.pageCount && props.pageCount > 1 ? (
        <ReactPaginate
          onClick={props.onClick}
          onPageChange={props.onPageChange}
          onPageActive={props.onPageActive}
          containerClassName="flex items-center justify-between bg-blue-700 p-3 rounded-md"
          nextClassName="text-white"
          previousClassName="text-white"
          pageClassName="text-white"
          breakClassName="text-white"
          activeLinkClassName="w-4 p-0.5 h-4 rounded-full bg-white text-black"
          pageCount={props.pageCount}
          nextLabel="Next >"
          previousLabel="< previous"
          breakLabel="..."
        />
      ) : null}
    </div>
  );
};

export default PaginationComp;
