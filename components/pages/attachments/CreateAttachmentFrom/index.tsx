"user client";

import useSWR from "swr";
import { SubmitHandler, useForm } from "react-hook-form";

import TextInput from "@/components/shared/TextInput";

import { CreateHallDto } from "@/utils/dto/create-hall.dto";
import { CreateCenterDto } from "@/utils/dto/create-center.dto";
import { CreateTeacherDto } from "@/utils/dto/create-teacher.dto";
import { CreateSessionDto } from "@/utils/dto/create-session.dto";

type FormAttachmentData = {
  hallId: string;
  centerId: string;
  sessionId: string;
  teacherId: string;

  file: File;
  name: string;
};

const CreateAttachmentFrom = () => {
  const { data: myHalls } = useSWR<CreateHallDto[]>("/halls");
  const { data: myCenters } = useSWR<CreateCenterDto[]>("/centers");
  const { data: myTeachers } = useSWR<CreateTeacherDto[]>("/teachers");
  const { data: mySessions } = useSWR<CreateSessionDto[]>("/sessions");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAttachmentData>();

  const onSubmit: SubmitHandler<FormAttachmentData> = async (data) => {};

  return (
    <form
      className="grid grid-cols-12 gap-x-6 gap-y-8 bg-white px-6 py-8 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="name"
          registerFunc={register}
          title="File Name"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 2,
          }}
        />
      </div>
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="file"
          registerFunc={register}
          title="Select File"
          type="file"
          errors={errors}
          registerOptions={{
            required: true,
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <select
          defaultValue=""
          {...register("hallId", {
            required: true,
            minLength: 8,
          })}
        >
          <option value="">Select Hall</option>
          {myHalls?.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <select
          defaultValue=""
          {...register("centerId", {
            required: true,
            minLength: 8,
          })}
        >
          <option value="">Select Center</option>
          {myCenters?.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <select
          defaultValue=""
          {...register("teacherId", {
            required: true,
            minLength: 8,
          })}
        >
          <option value="">Select Teacher</option>
          {myTeachers?.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <select
          defaultValue=""
          {...register("sessionId", {
            required: true,
            minLength: 8,
          })}
        >
          <option value="">Select Session</option>
          {mySessions?.map((v) => {
            return <option value={v._id}>{v.name || v.date}</option>;
          })}
        </select>
      </div>

      <button
        type="submit"
        className="bg-orange-500 border border-white rounded-md px-8 py-4 place-self-center"
      >
        Create New Attachment
      </button>
    </form>
  );
};

export default CreateAttachmentFrom;
