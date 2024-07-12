"use client";

import { useState } from "react";

import Header from "@/components/pages/home/Header";
import PaginationComp from "@/components/shared/PaginationComp";
import SearchFilters from "@/components/pages/centers/SearchFilters";
import FloatingCreateButton from "@/components/shared/FloatingCreateButton";
import CentersShowCards from "@/components/pages/centers/CentersShowCards";
import { getCenterCount } from "@/utils/doc-count/get-center-count";
import { CenterDisplayData } from "@/utils/docs/center-display-data";
import { getCentersByPage } from "@/utils/crud/centers/get-all-centers";
import { DateTime } from "luxon";
import { AdminType } from "@/utils/enums/admin-type.enum";

import { faker } from "@faker-js/faker";

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

  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Centers Page" />
      <SearchFilters />
      <CentersShowCards
        cardsInfo={[
          {
            _id: "1",
            createdAt: DateTime.now().toISO(),
            creatorID: {
              adminType: AdminType.SuperAdmin,
              email: faker.internet.email(),
              name: faker.person.fullName(),
              password: faker.internet.password(),
              _id: faker.internet.ipv6(),
            },
            location: [faker.location.latitude(), faker.location.longitude()],
            name: faker.person.fullName(),
            updatedAt: faker.date.anytime().toISOString(),
          },
        ]}
      />
      <FloatingCreateButton linkTo="/centers/create" />
      <PaginationComp
        pageCount={centersCount}
        onPageChange={onPaginationClick}
      />
    </main>
  );
};

export default CentersPage;
