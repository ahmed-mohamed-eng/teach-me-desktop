"use client";

import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FieldError,
} from "react-hook-form";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import TextInput from "./TextInput";

export interface AdminLoginInfo {
  usernameOrEmail: string;
  password: string;
}

const RegisterComp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginInfo>();

  const onLoginAdmin: SubmitHandler<AdminLoginInfo> = async (data) => {};

  const onLoginAdminError: SubmitErrorHandler<FieldError> = (error) => {
    if (error.message) {
      toast.error<FieldError>(error.message.message);
    }
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-between space-y-5"
      onSubmit={handleSubmit(onLoginAdmin, onLoginAdminError)}
    >
      <div className="w-full grid grid-cols-1 gap-5">
        <TextInput
          registerFunc={register}
          htmlName="usernameOrEmail"
          title="Username/Email"
          errors={errors}
          registerOptions={{
            maxLength: 200,
            required: true,
          }}
        />
        <TextInput
          registerFunc={register}
          errors={errors}
          htmlName="password"
          title="Password"
          type="password"
          registerOptions={{
            required: true,
          }}
        />
      </div>
      <button
        className="rounded bg-amber-400 text-gray-900 px-10 py-3 text-3xl font-cairo font-black"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default RegisterComp;
