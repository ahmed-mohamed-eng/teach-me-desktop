import React from "react";

import Header from "@/components/pages/home/Header";
import BackButton from "@/components/shared/BackButton";
import CreateStudentFrom from "@/components/pages/students/CreateStudentFrom";

const CreatePage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Teachers Page" />
      <CreateStudentFrom />
      <BackButton linkTo="/teachers" />
    </main>
  );
};

export default CreatePage;
