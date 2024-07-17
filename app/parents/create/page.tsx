import Header from "@/components/pages/home/Header";
import BackButton from "@/components/shared/BackButton";
import CreateParentFrom from "@/components/pages/parents/CreateParentFrom";

const CreatePage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Teachers Page" />
      <CreateParentFrom />
      <BackButton linkTo="/teachers" />
    </main>
  );
};

export default CreatePage;
