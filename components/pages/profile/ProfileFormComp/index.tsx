"use client";

import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FieldError,
} from "react-hook-form";

import { useEffect, useState } from "react";

import validator from "validator";

import TextInput from "./TextInput";

import { toast } from "react-toastify";

import { isValidUsername } from "@/utils/validation/username.valid";
import {
  filterUpdateAdmin,
  updateAdmin,
} from "@/utils/crud/admins/update-admin";
import { setLocalObject } from "@/utils/local-storage/setLocalObj";

export interface AdminInfo {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  nationalID: number;
  password: string;
  image: string | File;
}

export interface UpdatedAdminInfo extends AdminInfo {
  [key: string]: any;
}

const ProfileFormComp = () => {
  const [admin, setAdmin] = useState<AdminInfo>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminInfo>();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token && localStorage && !admin) {
      const adminInfoStr = localStorage.getItem("adminInfo") || undefined;

      const adminObj = adminInfoStr ? JSON.parse(adminInfoStr) : undefined;
      setAdmin(adminObj);
    }
  }, [admin]);

  const onCreateAdmin: SubmitHandler<Partial<UpdatedAdminInfo>> = async (
    data
  ) => {
    const adminData = await filterUpdateAdmin(data);

    try {
      const admin = await updateAdmin({
        ...adminData,
      });
      setLocalObject("adminInfo", admin);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const onCreateAdminError: SubmitErrorHandler<FieldError> = (error) => {
    if (error.message) {
      toast.error<FieldError>(error.message.message, {
        autoClose: 200,
        closeOnClick: true,
      });
    }
  };

  return (
    <section className="w-full bg-white p-2 pb-5 rounded-lg">
      <form
        className="w-full flex flex-col items-center justify-between space-y-5"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onCreateAdmin, onCreateAdminError)}
      >
        <div className="w-full grid grid-cols-2 gap-5">
          <TextInput
            registerFunc={register}
            htmlName="image"
            title="Profile Image"
            accept=".png, .jpg, .jpeg"
            type="file"
            errors={errors}
          />
          <TextInput
            registerFunc={register}
            htmlName="firstName"
            title="First Name"
            defaultValue={admin?.firstName}
            errors={errors}
            registerOptions={{
              maxLength: 200,
            }}
          />
          <TextInput
            registerFunc={register}
            htmlName="lastName"
            title="Last Name"
            defaultValue={admin?.lastName}
            errors={errors}
            registerOptions={{
              maxLength: 200,
            }}
          />
          <TextInput
            registerFunc={register}
            htmlName="username"
            title="Username"
            type="text"
            autocomplete="new-password"
            defaultValue={admin?.username}
            errors={errors}
            registerOptions={{
              maxLength: 200,
            }}
          />
          <TextInput
            registerFunc={register}
            htmlName="email"
            title="Email"
            type="email"
            autocomplete="off"
            defaultValue={admin?.email}
            errors={errors}
            registerOptions={{
              maxLength: 300,
            }}
          />
          <TextInput
            registerFunc={register}
            htmlName="nationalID"
            title="National ID"
            defaultValue={admin?.nationalID}
            errors={errors}
            registerOptions={{
              maxLength: 14,
              minLength: 14,
              valueAsNumber: true,
            }}
          />
          <TextInput
            registerFunc={register}
            errors={errors}
            htmlName="password"
            title="Password"
            type="password"
            autocomplete="new-password"
            defaultValue={admin?.password}
          />
        </div>
        <button
          className="rounded bg-amber-400 text-gray-900 px-10 py-3 text-3xl font-cairo font-black"
          type="submit"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default ProfileFormComp;
