import React from "react";

import Header from "@/components/pages/home/Header";
import BackButton from "@/components/shared/BackButton";
import CreateSessionFrom from "@/components/pages/sessions/CreateSessionFrom";

const CreatePage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Teachers Page" />
      <CreateSessionFrom />
      <BackButton linkTo="/teachers" />
    </main>
  );
};

export default CreatePage;
