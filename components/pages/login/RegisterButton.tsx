"use client";

import { useRouter } from "next/navigation";

const RegisterButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <button
      onClick={onClick}
      className="px-8 py-3 font-bold font-cairo rounded-md border border-blue-600 bg-indigo-800 text-white"
    >
      Login
    </button>
  );
};

export default RegisterButton;
