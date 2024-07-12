import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import TextInput from "./TextInput";

import { CreateAdminDto } from "@/utils/dto/admin.dto";
import { getAdminInfo } from "@/utils/functions/getAdminInfo";
import { createNewCenter } from "@/utils/crud/centers/create-center";
import MultiSelectAdmins from "@/components/shared/MultiSelectAdmins";

export interface CenterInfo {
  name: string;
  images: FileList;
  locationLng: number;
  locationLat: number;
}

const CreateForm = () => {
  const [location, setLocation] = useState<[number, number]>();
  const [admin, setAdmin] = useState<CreateAdminDto>();
  const [selectAdminsIDs, setSelectAdminsIDs] = useState<string[]>([]);

  useEffect(() => {
    const adminInfo = getAdminInfo();
    if (adminInfo && !admin) {
      setAdmin(adminInfo);
    }
  }, [admin]);

  const onGetUserLocation = () => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  };

  useEffect(() => {
    if (!location) {
      onGetUserLocation();
    }
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CenterInfo>();

  const onCreateNewCenter: SubmitHandler<CenterInfo> = async (data) => {
    if (!admin || !admin.id) {
      toast.error("No Admin You Should Login");
      return;
    }

    if (!location) {
      toast.error("No Location You Should Enter/Permit Location");
      return;
    }

    await createNewCenter({
      name: data.name,
      centerImages: data.images,
      creatorID: admin.id,
      location: [data.locationLat, data.locationLng],
      adminsIDs: selectAdminsIDs,
      hallsIDs: [],
      parentsIDs: [],
      sessionsIDs: [],
      studentsIDs: [],
      teachersIDs: [],
      attachmentsIDs: [],
    });
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-between space-y-5"
      encType="multipart/form-data"
      onSubmit={handleSubmit(onCreateNewCenter)}
    >
      <div className="w-full grid grid-cols-2 gap-5">
        <TextInput
          registerFunc={register}
          htmlName="images"
          title="Centers Images"
          accept=".png, .jpg, .jpeg"
          type="file"
          errors={errors}
        />
        <TextInput
          registerFunc={register}
          htmlName="name"
          title="Create Center Name"
          errors={errors}
          registerOptions={{
            maxLength: 200,
          }}
        />
        <TextInput
          registerFunc={register}
          htmlName="locationLat"
          title="Center Latitude"
          defaultValue={location?.[0]}
          errors={errors}
          registerOptions={{
            maxLength: 200,
          }}
        />
        <TextInput
          registerFunc={register}
          htmlName="locationLng"
          title="Center Longitude"
          defaultValue={location?.[1]}
          errors={errors}
          registerOptions={{
            maxLength: 200,
          }}
        />

        <MultiSelectAdmins setIDs={setSelectAdminsIDs} IDs={selectAdminsIDs} />
      </div>
      <div className="w-full flex flex-col items-center justify-start space-y-5 pb-5">
        <button
          className="rounded bg-amber-400 text-gray-900 px-10 py-3 text-3xl font-cairo font-black"
          type="submit"
        >
          Create New
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
