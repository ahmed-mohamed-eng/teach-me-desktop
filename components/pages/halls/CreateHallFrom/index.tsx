"user client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import TextInput from "@/components/shared/TextInput";

import AvailableDate, {
  DateInfo,
} from "../../centers/CreateNewCenter/AvailableDate";
import { CreateCenterDto } from "@/utils/dto/create-center.dto";

type FormHallDate = {
  name: string;
  capacity: number;
  centerId: string;
};

const CreateHallFrom = () => {
  const [selectedDate, setSelectedDate] = useState<DateInfo>();
  const [myCenters, setMyCenters] = useState<CreateCenterDto[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormHallDate>();

  const onSubmit: SubmitHandler<FormHallDate> = async (data) => {};

  return (
    <form
      className="grid grid-cols-12 gap-x-6 gap-y-8 bg-white px-6 py-8 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="name"
          registerFunc={register}
          title="Hall's Name"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 2,
          }}
        />
      </div>
      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <TextInput
          htmlName="capacity"
          registerFunc={register}
          title="Hall's Capacity"
          type="number"
          errors={errors}
          registerOptions={{
            required: true,
            minLength: 2,
          }}
        />
      </div>

      <div className="col-span-6 flex flex-col space-y-3 w-full">
        <select
          defaultValue=""
          {...register("centerId", {
            required: true,
            minLength: 2,
          })}
        >
          <option value="">Select Center</option>
          {myCenters?.map((v) => {
            return <option value={v._id}>{v.name}</option>;
          })}
        </select>
      </div>

      <AvailableDate onSelectedDate={setSelectedDate} />

      <button
        type="submit"
        className="bg-orange-500 border border-white rounded-md px-8 py-4 place-self-center"
      >
        Create New Hall
      </button>
    </form>
  );
};

export default CreateHallFrom;
