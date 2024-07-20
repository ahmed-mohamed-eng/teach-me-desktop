import React from "react";
import Link from "next/link";

import getAdminInfo from "@/utils/crud/admins/get-admin";
import UserAvatarInfo from "@/components/shared/UserAvatarInfo";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const admin = await getAdminInfo(id);

  const onDelete = () => {};

  return (
    <main className="w-full bg-white grid grid-cols-3 gap-8 px-8 py-4 rounded">
      {/* Basic Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <UserAvatarInfo
          email={admin.email}
          name={admin.name}
          avatarPath={admin.avatarPath}
        />
      </section>

      {/* Admins Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <em>Admin Type: {admin.adminType}</em>
        <span>National Id: {admin.nationalId}</span>
      </section>

      {/* Permissions Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Permissions</h2>
        <div className="w-full flex flex-col space-y-2">
          <span>Admins</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Centers</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Students</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Teachers</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Halls</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Sessions</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Parents</span>
          <div className="flex items-center space-x-2"></div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <span>Attachments</span>
          <div className="flex items-center space-x-2"></div>
        </div>
      </section>

      {/* On Admin Actions */}
      <section className="col-span-1 place-self-end self-end flex items-center justify-end space-x-3">
        <Link
          className="px-8 py-4 rounded-sm text-blue-600"
          href={`/admins/edit/${admin._id}`}
        >
          Edit Admin
        </Link>

        <button
          onClick={onDelete}
          className="px-8 py-4 rounded-sm bg-red-500 text-white"
        >
          Delete Admin
        </button>
      </section>
    </main>
  );
}
