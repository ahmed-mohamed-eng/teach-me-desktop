import React from "react";
import Link from "next/link";

import getCenter from "@/utils/crud/centers/get-center";

import { v4 as uuid } from "uuid";

import UserAvatarInfo from "@/components/shared/UserAvatarInfo";
import CenterImagesDisplay from "@/components/pages/centers/CenterImagesDisplay";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const center = await getCenter(id);

  const onDeleteCenter = () => {};

  return (
    <main className="w-full bg-white grid grid-cols-3 gap-8 px-8 py-4 rounded">
      {/* Basic Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h1>{center.name}</h1>
        <time>
          From {center.timeFrom} to {center.timeTo}
        </time>
        <time>
          Day {center.dayFrom} to day {center.dayTo}
        </time>

        <aside>Created By {center.creatorId.name}</aside>

        <span>
          Coordinates {center.location[0]}, {center.location[1]}
        </span>
      </section>

      {/* Admins Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Admins</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.adminsIDs.map((v) => {
            return (
              <UserAvatarInfo
                key={uuid()}
                email={v.email}
                name={v.name}
                avatarPath={v.avatarPath}
              />
            );
          })}
        </aside>
      </section>

      {/* Halls Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Associated Halls</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.hallsIDs.map((v) => {
            return (
              <div key={uuid()} className="w-full flex flex-col space-y-2">
                <Link href={`/halls/one/${v._id}`}>{v.name} Hall</Link>
                <span>Can hold {v.capacity} member</span>
              </div>
            );
          })}
        </aside>
      </section>

      {/* Sessions Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Associated Sessions</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.sessionsIDs.map((v) => {
            return (
              <div key={uuid()} className="w-full flex flex-col space-y-2">
                <Link href={`/halls/one/${v._id}`}>{v.name} Session</Link>
              </div>
            );
          })}
        </aside>
      </section>

      {/* Attachments Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Associated Attachments</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.attachmentsIDs.map((v) => {
            return (
              <div key={uuid()} className="w-full flex flex-col space-y-2">
                <Link href={`/halls/one/${v._id}`}>{v.name}</Link>
              </div>
            );
          })}
        </aside>
      </section>

      {/* Teachers Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Associated Teachers</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.teachersIDs.map((v) => {
            return (
              <UserAvatarInfo
                key={uuid() + v._id}
                email={v.email}
                name={v.name}
                avatarPath={v.avatarPath}
              />
            );
          })}
        </aside>
      </section>

      {/* Students Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Associated Students</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.studentsIDs.map((v) => {
            return (
              <UserAvatarInfo
                key={uuid() + v._id}
                email={v.email}
                name={v.name || v.firstName}
                avatarPath={v.avatarPath}
              />
            );
          })}
        </aside>
      </section>

      {/* Parents Info */}
      <section className="col-span-1 w-full flex flex-col space-y-4">
        <h2>Associated Students' Parents</h2>
        <aside className="w-full flex flex-col space-y-2">
          {center.parentsIDs.map((v) => {
            return (
              <UserAvatarInfo
                key={uuid() + v._id}
                email={v.email}
                name={v.name || v.firstName}
                avatarPath={v.avatarPath}
              />
            );
          })}
        </aside>
      </section>

      {/* Center's Images */}
      <section className="col-span-3 w-full">
        <CenterImagesDisplay images={center.centerImages} />
      </section>

      {/* On Center Actions */}
      <section className="col-span-1 place-self-end self-end flex items-center justify-end space-x-3">
        <Link
          className="px-8 py-4 rounded-sm text-blue-600"
          href={`/centers/edit/${center._id}`}
        >
          Edit Center
        </Link>

        <button
          onClick={onDeleteCenter}
          className="px-8 py-4 rounded-sm bg-red-500 text-white"
        >
          Delete Center
        </button>
      </section>
    </main>
  );
}
