import React, { ReactNode } from "react";
import { UserIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

//Open-Closed Principle - Software components should be open for extension, but not for modification.

type Props = {
  actions: {
    filterUsers: () => void;
    filterAll: () => void;
  };
  labels?: {
    filterUsers: string;
    filterAll: string;
  };
  icon?: ReactNode;
  iconType?: "user" | "adjustments";
};

//Bad
function FilterButtonsBad({
  actions: { filterUsers, filterAll },
  labels = {
    filterUsers: "Filter users",
    filterAll: "Filter all users",
  },
  iconType = "user",
}: Props) {
  let icon: ReactNode;

  if (iconType === "user") {
    icon = <UserIcon />;
  } else if (iconType === "adjustments") {
    icon = <AdjustmentsHorizontalIcon />;
  }

  return (
    <div className="flex flex-col gap-2">
      <button className="flex gap-1" onClick={filterAll}>
        {labels.filterAll} {iconType && icon}
      </button>
      <button className="flex gap-1" onClick={filterUsers}>
        {labels.filterUsers}
      </button>
    </div>
  );
}

//Good
export function FilterButtons({
  actions: { filterUsers, filterAll },
  labels = {
    filterUsers: "Filter users",
    filterAll: "Filter all users",
  },
  icon = null,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <button className="flex gap-1" onClick={filterAll}>
        {labels.filterAll} {icon}
      </button>
      <button className="flex gap-1" onClick={filterUsers}>
        {labels.filterUsers} {icon}
      </button>
    </div>
  );
}

export function FilterButtonsWithUserIcon(props: Props) {
  return (
    <FilterButtons
      {...props}
      icon={<UserIcon className="h-6 w-6 text-blue-500" />}
    />
  );
}
