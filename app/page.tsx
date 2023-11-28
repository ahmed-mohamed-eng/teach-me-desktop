"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/pages/home/Header";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage && !localStorage.getItem("adminToken")) {
      router.push("/sign-up");
    }
  }, [router]);

  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5">
      <Header />
    </main>
  );
}
