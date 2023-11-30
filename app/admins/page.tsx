"use client";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/admins/SearchFilters";
import CentersShowCards from "@/components/pages/admins/CentersShowCards";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";

const CentersPage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Admins Page" />
      <SearchFilters />
      <CentersShowCards />
      <FloatingCreateButton linkTo="/admins/create" />
      <PaginationComp />
    </main>
  );
};

export default CentersPage;
