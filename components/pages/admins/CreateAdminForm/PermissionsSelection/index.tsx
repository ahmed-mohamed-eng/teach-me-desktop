import React, { useEffect, useMemo, useState } from "react";
import PermGroup from "./PermGroup";
import { CRUDPermissions } from "@/utils/dto/permissions.dto";

export type PermissionResult = CRUDPermissions[] | CRUDPermissions;

export const ADMIN_KEY = "admin";
export const HALL_KEY = "hall";
export const CENTER_KEY = "center";
export const PARENT_KEY = "parent";
export const STUDENT_KEY = "student";
export const TEACHER_KEY = "teacher";
export const ATTACHMENT_KEY = "attachment";

export interface PermissionsSelectionProps {
  onResultPermissions?: (result: Map<string, PermissionResult>) => void;
}

const PermissionsSelection = ({
  onResultPermissions,
}: PermissionsSelectionProps) => {
  const [adminsPerm, setAdminsPerm] = useState<PermissionResult>();
  const [hallsPerm, setHallsPerm] = useState<PermissionResult>();
  const [centersPerm, setCentersPerm] = useState<PermissionResult>();
  const [parentPerm, setParentPerm] = useState<PermissionResult>();
  const [studentPerm, setStudentPerm] = useState<PermissionResult>();
  const [teacherPerm, setTeacherPerm] = useState<PermissionResult>();
  const [attachPerm, setAttachPerm] = useState<PermissionResult>();

  const resultPermissions = useMemo(() => {
    const result = new Map<string, PermissionResult>();

    if (adminsPerm) {
      result.set(ADMIN_KEY, adminsPerm);
    }

    if (hallsPerm) {
      result.set(HALL_KEY, hallsPerm);
    }

    if (centersPerm) {
      result.set(CENTER_KEY, centersPerm);
    }

    if (parentPerm) {
      result.set(PARENT_KEY, parentPerm);
    }

    if (studentPerm) {
      result.set(STUDENT_KEY, studentPerm);
    }

    if (teacherPerm) {
      result.set(TEACHER_KEY, teacherPerm);
    }

    if (attachPerm) {
      result.set(ATTACHMENT_KEY, attachPerm);
    }

    return result;
  }, [
    adminsPerm,
    hallsPerm,
    centersPerm,
    parentPerm,
    studentPerm,
    teacherPerm,
    attachPerm,
  ]);

  useEffect(() => {
    if (onResultPermissions) {
      onResultPermissions(resultPermissions);
    }
  }, [resultPermissions]);

  return (
    <div className="col-span-12 flex flex-col space-y-6 w-full">
      <PermGroup groupName="Admin" onPermissions={setAdminsPerm} />
      <PermGroup groupName="Hall" onPermissions={setHallsPerm} />
      <PermGroup groupName="Center" onPermissions={setCentersPerm} />
      <PermGroup groupName="Parent" onPermissions={setParentPerm} />
      <PermGroup groupName="Student" onPermissions={setStudentPerm} />
      <PermGroup groupName="Teacher" onPermissions={setTeacherPerm} />
      <PermGroup groupName="Attachment" onPermissions={setAttachPerm} />
    </div>
  );
};

export default PermissionsSelection;
