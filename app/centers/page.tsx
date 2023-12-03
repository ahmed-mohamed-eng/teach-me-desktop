"use client";

import { useEffect, useState } from "react";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/centers/SearchFilters";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";
import CentersShowCards from "@/components/pages/centers/CentersShowCards";
import { getCenterCount } from "@/utils/doc-count/get-center-count";
import { CenterDisplayData } from "@/utils/docs/center-display-data";
import { getCentersByPage } from "@/utils/crud/centers/get-all-centers";

const CentersPage = () => {
  const [centersCount, setCentersCount] = useState<number>();
  const [centers, setCenters] = useState<CenterDisplayData[]>();

  const onGetCentersCount = async () => {
    const count = await getCenterCount();
    if (count) {
      setCentersCount(count);
    }
  };

  const onPaginationClick = (selectedItem: { selected: number }) => {
    onGetCentersByPage(selectedItem.selected);
  };

  const onGetCentersByPage = async (page: number) => {
    const centers = await getCentersByPage(page);
    setCenters(centers);
  };

  useEffect(() => {
    if (typeof centersCount === "undefined") {
      onGetCentersCount();
    }
  }, [centersCount]);

  useEffect(() => {
    if (typeof centers === "undefined") {
      onGetCentersByPage(0);
    }
  }, [centers]);

  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Centers Page" />
      <SearchFilters />
      <CentersShowCards cardsInfo={centers} />
      <FloatingCreateButton linkTo="/centers/create" />
      <PaginationComp
        pageCount={centersCount}
        onPageChange={onPaginationClick}
      />
    </main>
  );
};

export default CentersPage;
