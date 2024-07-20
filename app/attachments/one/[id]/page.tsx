import React from "react";
import Link from "next/link";

import getAttachment from "@/utils/crud/attachments/getAttachment";
import { DateTime } from "luxon";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const attachment = await getAttachment(id);

  const onDelete = () => {};

  const creationDate = attachment.createdAt
    ? DateTime.fromISO(attachment.createdAt).toFormat("LLL dd, yyyy")
    : DateTime.now().toFormat("LLL dd, yyyy");

  return (
    <main className="w-full bg-white grid grid-cols-3 gap-8 px-8 py-4 rounded">
      {/* Basic Info */}
      <section className="col-span-3 w-full flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <span>{attachment.name}</span>
          <span>{creationDate}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Link href={attachment.filePath} download={attachment.name}>
            Download File
          </Link>

          <span>Size: {attachment.size}</span>
        </div>

        <div className="flex flex-col space-y-2">
          <span>For Center: {attachment.centerId}</span>
          <span>For Hall: {attachment.hallId}</span>
          <span>For Session: {attachment.sessionId}</span>
          <span>For Teacher: {attachment.teacherId}</span>
          {attachment.adminId ? (
            <span>Created By: {attachment.adminId}</span>
          ) : null}
        </div>
      </section>

      {/* On Attachment Actions */}
      <section className="col-span-1 place-self-end self-end flex items-center justify-end space-x-3">
        <Link
          className="px-8 py-4 rounded-sm text-blue-600"
          href={`/attachments/edit/${attachment._id}`}
        >
          Edit Attachment
        </Link>

        <button
          onClick={onDelete}
          className="px-8 py-4 rounded-sm bg-red-500 text-white"
        >
          Delete Attachment
        </button>
      </section>
    </main>
  );
}
