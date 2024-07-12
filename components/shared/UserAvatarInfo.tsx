import React from "react";

import Image from "next/image";

import { AiFillCopy } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";

import { CreateAdminDto } from "@/utils/dto/admin.dto";

type AdminInfo = Pick<CreateAdminDto, "name" | "email" | "avatarPath">;

export interface UserAvatarInfoProps extends AdminInfo {}

/**This component displays the user avatar and the info like role, name, age etc.
 * what ever impotent note it will be displayed.
 */
const UserAvatarInfo = ({ name, email, avatarPath }: UserAvatarInfoProps) => {
  const onCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="grid-cols-3 h-20">
        {avatarPath ? (
          <Image alt={name} src={avatarPath} fill className="w-full h-full" />
        ) : (
          <IoPersonCircleSharp fontSize={80} />
        )}
      </div>

      <div className="grid-cols-9 flex flex-col space-y-2">
        <p className="text-lg font-semibold text-black">{name}</p>
        <p className="text-gray-600 text-sm" onClick={onCopyEmail}>
          {email} <AiFillCopy title="Copy" fill="#4b5563" fontSize={20} />
        </p>
      </div>
    </div>
  );
};

export default UserAvatarInfo;
