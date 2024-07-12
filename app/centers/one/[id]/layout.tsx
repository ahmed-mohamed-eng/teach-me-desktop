import React from "react";

import Header from "@/components/pages/home/Header";
import BackButton from "@/components/shared/BackButton";

import "react-tooltip/dist/react-tooltip.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Single Center Page" />
      {children}
      <BackButton linkTo="/centers" />
    </main>
  );
};

export default layout;
