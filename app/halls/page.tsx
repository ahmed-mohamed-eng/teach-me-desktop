"use client";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/halls/SearchFilters";
import CentersShowCards from "@/components/pages/halls/CentersShowCards";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";

const CentersPage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Halls Page" />
      <SearchFilters />
      <CentersShowCards />
      <FloatingCreateButton linkTo="/halls/create" />
      <PaginationComp />
    </main>
  );
};

export default CentersPage;
