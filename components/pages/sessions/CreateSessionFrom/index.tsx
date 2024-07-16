"user client";

import { useState } from "react";
import useSWR from "swr";
import { SubmitHandler, useForm } from "react-hook-form";

import TextInput from "@/components/shared/TextInput";
import { CreateHallDto } from "@/utils/dto/create-hall.dto";
import DatePicker from "@/components/shared/DatePicker";

type FormSessionData = {
  title?: string;

  hallId: string;
  centerId: string;
  teacherId: string;

  studentsIds?: string[];
  attachmentsIds?: string[];
};

const CreateSessionFrom = () => {
  const { data: myHalls } = useSWR<CreateHallDto[]>("/halls");
  const { data: myCenters } = useSWR<CreateHallDto[]>("/centers");
  const { data: myTeachers } = useSWR<CreateHallDto[]>("/teachers");
  const { data: myStudents } = useSWR<CreateHallDto[]>("/students");
  const { data: myAttachments } = useSWR<CreateHallDto[]>("/attachments");

  const [date, setDate] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSessionData>();

  const onSubmit: SubmitHandler<FormSessionData> = async (data) => {};

  return (
    <form
      className="grid grid-cols-12 gap-x-6 gap-y-8 bg-white px-6 py-8 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="title"
          registerFunc={register}
          title="Session Name"
          errors={errors}
          registerOptions={{
            required: false,
            minLength: 2,
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <DatePicker onDateChange={setDate} />
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
          {...register("studentsIds", {
            required: false,
            minLength: 8,
          })}
        >
          <option value="">Select Students</option>
          {myStudents?.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <select
          defaultValue=""
          {...register("attachmentsIds", {
            required: false,
            minLength: 8,
          })}
        >
          <option value="">Select AttachmentsIds {"(if any)"}</option>
          {myAttachments?.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>

      <button
        type="submit"
        className="bg-orange-500 border border-white rounded-md px-8 py-4 place-self-center"
      >
        Create New Session
      </button>
    </form>
  );
};

export default CreateSessionFrom;
