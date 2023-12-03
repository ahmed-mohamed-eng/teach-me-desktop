import Header from "@/components/pages/home/Header";
import CreateNewCenter from "@/components/pages/centers/CreateNewCenter";
import BackButton from "@/components/shared/BackButton";

const CreatePage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-start justify-start p-5 space-y-5">
      <Header title="Create New Center" />
      <CreateNewCenter />
      <BackButton linkTo="/centers" />
    </main>
  );
};

export default CreatePage;
