import Header from "@/components/pages/home/Header";
import BriefStatics from "@/components/pages/home/BriefStatics";

export default function Home() {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header />
      <BriefStatics />
    </main>
  );
}
