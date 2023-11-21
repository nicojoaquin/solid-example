import React, { useState } from "react";

type UserT = {
  email: string;
  name: { firstname: string };
  address: {
    city: string;
  };
};

export default function useFilter(users: UserT[]) {
  const [filtered, setFiltered] = useState<UserT[]>([]);

  const filterUsers = () => {
    setFiltered(users.filter((user) => user.address.city === "kilcoole"));
  };

  const filterAll = () => {
    setFiltered([]);
  };

  return { filtered, filterUsers, filterAll };
}
