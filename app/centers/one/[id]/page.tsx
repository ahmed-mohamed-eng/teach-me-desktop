import Link from "next/link";
import React from "react";

import { AiFillDelete, AiFillEdit, AiFillInfoCircle } from "react-icons/ai";

import { Tooltip } from "react-tooltip";

const SingleCenterPage = () => {
  return (
    <div className="w-full bg-white grid grid-cols-3 gap-8 px-8 py-4 rounded">
      Actions Header
      <div className="col-span-3 flex items-center justify-end space-x-4">
        <button className="p-4 rounded border border-black">
          <AiFillEdit fontSize={25} />
        </button>
        <button className="p-4 rounded bg-red-600">
          <AiFillDelete fill="white" fontSize={25} />
        </button>
      </div>
      {/* Center Info Header */}
      <div className="w-full flex flex-col space-y-2">
        <h1 className="text-2xl">
          <span className="font-semibold">{"Alshrouq"}</span>
          {"'s"} Center
        </h1>
        <p className="text-lg">
          {33.33333}, {33.33333}
        </p>
        <p>By Ahmed Karmy</p>

        <div className="flex flex-col space-y-2">
          <h4>
            Centers Admins{" "}
            <span>
              <AiFillInfoCircle data-tooltip-id="admins-info" />
              <Tooltip id="admins-info">
                This an admins list which contains all the admins you've created
                for managing the center functionality.
              </Tooltip>
            </span>
          </h4>

          <ul className="list-disc flex flex-col space-y-3">
            <li>
              <Link href={`admins/one/${1}`}>Admin Name</Link>
            </li>
            <li>
              <Link href={`admins/one/${1}`}>Admin Name</Link>
            </li>
            <li>
              <Link href={`admins/one/${1}`}>Admin Name</Link>
            </li>
            <li>
              <Link href={`admins/one/${1}`}>Admin Name</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCenterPage;

// export interface CenterDisplayData {
//   adminsIDs?: CreateAdminDto[];
//   hallsIDs?: CreateHallDto[];
//   studentsIDs?: StudentDto[];
//   teachersIDs?: CreateTeacherDto[];
//   sessionsIDs?: CreateSessionDto[];
//   centerImages?: FullMetadata[];
//   createdAt: string;
//   updatedAt: string;
// }
