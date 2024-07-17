"user client";

import { SubmitHandler, useForm } from "react-hook-form";

import TextInput from "@/components/shared/TextInput";

type FormParentData = {
  image: File;
  email: string;
  password: string;
  firstName: string;
  confirmPassword: string;

  lastName?: string;
  username?: string;
  nationalId?: string;
};

const CreateParentFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormParentData>();

  const onSubmit: SubmitHandler<FormParentData> = async (data) => {};

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
        <TextInput
          htmlName="image"
          registerFunc={register}
          title="Personal Image"
          type="image"
          errors={errors}
          registerOptions={{
            required: true,
          }}
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 border border-white rounded-md px-8 py-4 place-self-center"
      >
        Create New Parent
      </button>
    </form>
  );
};

export default CreateParentFrom;
