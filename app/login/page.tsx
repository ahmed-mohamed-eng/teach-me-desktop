import LoginComp from "@/components/pages/login/LoginComp";
import RegisterButton from "@/components/pages/login/RegisterButton";

const LoginPage = () => {
  return (
    <main className="w-full bg-orange-500 flex min-h-screen flex-col items-center justify-start py-10 px-24">
      <h1 className="text-5xl text-white font-semibold font-cairo mb-7">
        Welcome Back &#128075;
      </h1>
      <section className="p-10 w-full h-full bg-white rounded-xl shadow-xl shadow-gray-900 flex flex-col items-center justify-start space-y-5">
        <h2 className="text-4xl font-cairo font-bold">Login</h2>
        <LoginComp />
        <RegisterButton />
      </section>
    </main>
  );
};

export default LoginPage;
