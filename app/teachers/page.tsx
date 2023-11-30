"use client";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/teachers/SearchFilters";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";
import CentersShowCards from "@/components/pages/teachers/CentersShowCards";

const CentersPage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Teachers Page" />
      <SearchFilters />
      <CentersShowCards />
      <FloatingCreateButton linkTo="/teachers/create" />
      <PaginationComp />
    </main>
  );
};

export default CentersPage;
