"use client";

import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FieldError,
} from "react-hook-form";

import validator from "validator";

import TextInput from "./TextInput";

import { toast } from "react-toastify";

import { isValidUsername } from "@/utils/validation/username.valid";
import { createNewAdmin } from "@/utils/crud/admins/create-admin";

export interface AdminInfo {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  nationalID: number;
  password: string;
  passwordConfirmation: string;
}

const RegisterComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminInfo>();

  const onCreateAdmin: SubmitHandler<AdminInfo> = async (data) => {
    try {
      if (data.password !== data.passwordConfirmation) {
        toast.error("You Should Confirm Your Password", {
          position: "top-center",
        });
        return;
      }

      const admin = await createNewAdmin({
        email: data.email,
        name: `${data.firstName} ${data.lastName}`.trim(),
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        nationalID: data.nationalID,
        username: data.username,
      });

      console.log({ admin });
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const onCreateAdminError: SubmitErrorHandler<FieldError> = (error) => {
    if (error.message) {
      toast.error<FieldError>(error.message.message);
    }
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-between space-y-5"
      onSubmit={handleSubmit(onCreateAdmin, onCreateAdminError)}
    >
      <div className="w-full grid grid-cols-2 gap-5">
        <TextInput
          registerFunc={register}
          htmlName="firstName"
          title="First Name"
          errors={errors}
          registerOptions={{
            maxLength: 200,
            validate: (value: string) => {
              if (validator.isEmpty(value)) return true;
              return validator.isAlphanumeric(value);
            },
            required: true,
          }}
        />
        <TextInput
          registerFunc={register}
          htmlName="lastName"
          title="Last Name"
          errors={errors}
          registerOptions={{
            maxLength: 200,
            validate: (value: string) => {
              if (validator.isEmpty(value)) return true;
              return validator.isAlphanumeric(value);
            },
            required: true,
          }}
        />
        <TextInput
          registerFunc={register}
          htmlName="username"
          title="Username"
          errors={errors}
          registerOptions={{
            maxLength: 200,
            validate: (value: string) => isValidUsername(value),
            required: true,
          }}
        />
        <TextInput
          registerFunc={register}
          htmlName="email"
          title="Email"
          type="email"
          errors={errors}
          registerOptions={{
            maxLength: 300,
            validate: (value: string) => {
              if (!validator.isEmail(value)) {
                return false;
              }

              return true;
            },
            required: true,
          }}
        />
        <TextInput
          registerFunc={register}
          htmlName="nationalID"
          title="National ID"
          errors={errors}
          registerOptions={{
            maxLength: 14,
            minLength: 14,
            valueAsNumber: true,
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
            validate: (value: string) => {
              if (!validator.isStrongPassword(value)) {
                toast.error("You should enter a strong password");
                return false;
              }
              return true;
            },
            required: true,
          }}
        />
        <TextInput
          registerFunc={register}
          errors={errors}
          htmlName="passwordConfirmation"
          title="Password Confirmation"
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
        Join Us Now
      </button>
    </form>
  );
};

export default RegisterComp;
