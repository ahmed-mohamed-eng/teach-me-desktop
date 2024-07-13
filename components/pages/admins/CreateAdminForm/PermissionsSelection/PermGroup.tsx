import { CRUDPermissions } from "@/utils/dto/permissions.dto";
import React, { useEffect, useMemo, useState } from "react";

export interface PermGroupProps {
  groupName: string;
  onPermissions?: (x: CRUDPermissions[] | CRUDPermissions) => void;
}

const PermGroup = ({ groupName, onPermissions }: PermGroupProps) => {
  const [canCreate, setCanCreate] = useState(false);
  const [canRead, setCanRead] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [canUpdate, setCanUpdate] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const permArr: CRUDPermissions[] | CRUDPermissions = useMemo(() => {
    if (isAll) {
      return "ALL";
    }

    const permissions: CRUDPermissions[] = [];

    if (canCreate) {
      permissions.push("CREATE");
    }

    if (canRead) {
      permissions.push("READ");
    }

    if (canDelete) {
      permissions.push("DELETE");
    }

    if (canUpdate) {
      permissions.push("UPDATE");
    }

    return permissions;
  }, [canCreate, canRead, canDelete, canUpdate, isAll]);

  useEffect(() => {
    if (onPermissions) {
      onPermissions(permArr);
    }
  }, [permArr, onPermissions]);

  return (
    <div className="flex flex-col space-y-4">
      <p>{groupName}'s Permissions</p>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor={`${groupName}-create`}>Create {groupName}</label>
          <input
            type="checkbox"
            checked={canCreate}
            name={`${groupName}-create`}
            id={`${groupName}-create`}
            onChange={setCanCreate.bind(null, !canCreate)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor={`${groupName}-update`}>Update {groupName}</label>
          <input
            type="checkbox"
            checked={canUpdate}
            name={`${groupName}-update`}
            id={`${groupName}-update`}
            onChange={setCanUpdate.bind(null, !canUpdate)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor={`${groupName}-read`}>Query {groupName}</label>
          <input
            type="checkbox"
            checked={canRead}
            name={`${groupName}-read`}
            id={`${groupName}-read`}
            onChange={setCanRead.bind(null, !canRead)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor={`${groupName}-delete`}>Delete {groupName}</label>
          <input
            type="checkbox"
            checked={canDelete}
            name={`${groupName}-delete`}
            id={`${groupName}-delete`}
            onChange={setCanDelete.bind(null, !canDelete)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor={`${groupName}`}>All Permissions</label>
          <input
            type="checkbox"
            checked={isAll}
            name={`${groupName}`}
            id={`${groupName}`}
            onChange={setIsAll.bind(null, !isAll)}
          />
        </div>
      </div>
    </div>
  );
};

export default PermGroup;
