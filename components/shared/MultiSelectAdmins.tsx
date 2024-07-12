"use client";

import { useState } from "react";
import { MoonLoader } from "react-spinners";

import UserAvatarInfo from "./UserAvatarInfo";
import useAdminsSWR from "@/utils/hooks/fetching/useAdminsSWR";

export interface MultiSelectAdminsProps {
  IDs: string[];
  setIDs: (x: string[]) => void;
}

const MultiSelectAdmins = ({ setIDs }: MultiSelectAdminsProps) => {
  const { data, isLoading } = useAdminsSWR();

  const [selectedUsersIDs, setSelectedUsersIDs] = useState<string[]>([]);

  const onSelectUser = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const inputEl = e.currentTarget.childNodes[0] as HTMLInputElement;

    inputEl.checked = !inputEl.checked;

    const id = e.currentTarget.dataset["id"] as string;

    if (id) {
      const usersIDs = Array.from(selectedUsersIDs);

      usersIDs.push(id);

      setIDs(usersIDs);
      setSelectedUsersIDs(usersIDs);
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      <div className="grid grid-cols-12 gap-x-4">
        <input
          type="text"
          placeholder="Enter Admin Email"
          className="col-span-10 rounded-md outline-none text-lg"
        />

        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center">
            <MoonLoader loading={isLoading} color="#f97316" size={20} />
          </div>
        ) : null}
      </div>

      <div className="w-full flex flex-col space-y-4">
        {data?.map((admin) => {
          return (
            <div
              onClick={onSelectUser}
              data-id={admin.id}
              className="w-full flex items-center justify-start space-x-3"
            >
              <input data-id={admin.id} type="checkbox" />
              <UserAvatarInfo
                email={admin.email}
                name={admin.name}
                avatarPath={admin.avatarPath}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelectAdmins;
