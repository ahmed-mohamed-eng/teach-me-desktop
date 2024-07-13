"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";

import { AdminType } from "@/utils/enums/admin-type.enum";

import TextInput from "@/components/shared/TextInput";

import PermissionsSelection, { PermissionResult } from "./PermissionsSelection";

type FormAdminData = {
  firstName: string;
  image: File;
  email: string;
  password: string;
  adminType: AdminType;
  confirmPassword: string;

  lastName?: string;
  nationalId?: string;
  username?: string;
};

type SelectedPerms = Map<string, PermissionResult>;

const CreateAdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAdminData>();

  const [selectedPermissions, setSelectedPermissions] =
    useState<SelectedPerms>();

  const onSubmit: SubmitHandler<FormAdminData> = async (data) => {
    if (!selectedPermissions || selectedPermissions.size <= 0) {
      toast.error("Permissions are required for creating Admins");
      return;
    }
  };

  return (
    <form
      className="grid grid-cols-12 gap-x-6 gap-y-8 bg-white px-6 py-8 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="firstName"
          registerFunc={register}
          title="First Name"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 2,
          }}
        />
      </div>
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="lastName"
          registerFunc={register}
          title="Last Name"
          errors={errors}
          registerOptions={{
            required: false,
            minLength: 2,
            deps: ["firstName"],
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="email"
          registerFunc={register}
          title="Email"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 5,
          }}
        />
      </div>
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="username"
          registerFunc={register}
          title="Username"
          errors={errors}
          registerOptions={{
            required: false,
            minLength: 2,
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="password"
          registerFunc={register}
          title="Password"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 8,
          }}
        />
      </div>
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="confirmPassword"
          registerFunc={register}
          title="Password"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 8,
            deps: ["password"],
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="nationalId"
          registerFunc={register}
          title="National ID"
          errors={errors}
          registerOptions={{
            required: false,
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <label htmlFor="adminType">Admin Type</label>
        <select
          id="adminType"
          {...register("adminType", {
            required: true,
          })}
          defaultValue=""
        >
          <option value="">Select Admin Type</option>
          <option value={AdminType.CenterOwner}>Co-Owner</option>
          <option value={AdminType.SuperAdmin}>Super Admin</option>
          <option value={AdminType.Admin}>Admin</option>
        </select>
      </div>

      <PermissionsSelection onResultPermissions={setSelectedPermissions} />
      <button
        type="submit"
        className="bg-orange-500 border border-white rounded-md px-8 py-4 place-self-center"
      >
        Create New Admin
      </button>
    </form>
  );
};

export default CreateAdminForm;
