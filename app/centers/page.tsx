"use client";

import { useEffect, useState } from "react";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/centers/SearchFilters";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";
import CentersShowCards from "@/components/pages/centers/CentersShowCards";
import { getCenterCount } from "@/utils/doc-count/get-center-count";

const CentersPage = () => {
  const [page, setPage] = useState(0);
  const [centersCount, setCentersCount] = useState<number>();

  const onGetCentersCount = async () => {
    const count = await getCenterCount();
    if (count) {
      setCentersCount(count);
    }
  };

  const onPaginationClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected);
  };

  useEffect(() => {
    if (typeof centersCount === "undefined") {
      onGetCentersCount();
    }
  }, [centersCount]);

  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Centers Page" />
      <SearchFilters />
      <CentersShowCards />
      <FloatingCreateButton linkTo="/centers/create" />
      <PaginationComp
        pageCount={centersCount}
        onPageChange={onPaginationClick}
      />
    </main>
  );
};

export default CentersPage;
