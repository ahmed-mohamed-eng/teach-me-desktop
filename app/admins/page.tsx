"use client";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/centers/SearchFilters";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";
import CentersShowCards from "@/components/pages/centers/CentersShowCards";

const CentersPage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Centers Page" />
      <SearchFilters />
      <CentersShowCards />
      <FloatingCreateButton linkTo="/centers/create" />
      <PaginationComp />
    </main>
  );
};

export default CentersPage;
