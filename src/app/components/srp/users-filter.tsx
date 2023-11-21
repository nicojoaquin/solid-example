import React, { PropsWithChildren, useState } from "react";
import User from "./user";
import useFilter from "@/app/hooks/useFilter";
import { FilterButtons, FilterButtonsWithUserIcon } from "../oc/filter-buttons";

type UserT = {
  email: string;
  name: { firstname: string };
  address: {
    city: string;
  };
};

type Props = PropsWithChildren & {
  users: UserT[];
};

export default function Filtered({ users, children }: Props) {
  const { filtered, filterUsers, filterAll } = useFilter(users);

  return (
    <div className="space-y-3">
      <FilterButtonsWithUserIcon
        labels={{
          filterAll: "Filter All users",
          filterUsers: "Filter kilcoole users",
        }}
        actions={{ filterUsers, filterAll }}
      />
      {!!filtered.length
        ? filtered.map((user, index) => <User key={index} {...user} />)
        : children}
    </div>
  );
}
