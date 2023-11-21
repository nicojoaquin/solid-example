"use client";

import React from "react";
import User from "./user";
import Filtered from "./users-filter";
import useUsers from "@/app/hooks/useUsers";

function OptimalSrp() {
  const { users } = useUsers();

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

export default OptimalSrp;
