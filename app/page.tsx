"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage && !localStorage.getItem("adminToken")) {
      router.push("/sign-up");
    }
  }, [router]);

  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-center justify-start py-10 px-24">
      <h1 className="text-5xl text-white font-semibold font-cairo mb-7">
        Welcome &#x1F601;
      </h1>
    </main>
  );
}
