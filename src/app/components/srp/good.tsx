"use client";

import React, { useEffect, useState } from "react";
import User from "./user";
import Filtered from "./users-filter";

type UserT = {
  email: string;
  name: { firstname: string };
  address: {
    city: string;
  };
};

function GoodSrp() {
  const [users, setUsers] = useState<UserT[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data: UserT[] = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center">
      <Filtered users={users}>
        {users.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </Filtered>
    </div>
  );
}

export default GoodSrp;
